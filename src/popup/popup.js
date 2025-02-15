document.addEventListener('DOMContentLoaded', function() {
    const openUrlButton = document.getElementById('openUrlButton');
    const removeUrlButton = document.getElementById('removeUrlButton');
    const urlInput = document.getElementById('urlInput');
    const newUrlInput = document.getElementById('newUrlInput');
    const addUrlButton = document.getElementById('addUrlButton');
    const favoriteMenusTab = document.getElementById('favoriteMenusTab');
    const tableBrowserTab = document.getElementById('tableBrowserTab');
    const classRunnerTab = document.getElementById('classRunnerTab');
    const openTableButton = document.getElementById('openTableButton');
    const openTableDirectlyBtn = document.getElementById('openTableDirectlyBtn');
    const removeTableButton = document.getElementById('removeTableButton');
    const tableInput = document.getElementById('tableInput');
    const newTableInput = document.getElementById('newTableInput');
    const addTableButton = document.getElementById('addTableButton');
    const runClassButton = document.getElementById('runClassButton');
    const classNameInput = document.getElementById('classNameInput');

    // Initialize IndexedDB
    const request = indexedDB.open('UrlExtensionDB', 2); // Increment the version number to force an upgrade

    request.onupgradeneeded = function(event) {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('urls')) {
            const objectStore = db.createObjectStore('urls', { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex('url', 'url', { unique: true });

            // Add initial data
            objectStore.transaction.oncomplete = function() {
                const urlObjectStore = db.transaction('urls', 'readwrite').objectStore('urls');
                urlObjectStore.add({ url: 'RetailCDXSchedule' });
                urlObjectStore.add({ url: 'RetailCDXUploadSession' });
                urlObjectStore.add({ url: 'RetailCDXDownloadSessionDataStore' }); 
                urlObjectStore.add({ url: 'RetailStoreTable' });
                urlObjectStore.add({ url: 'RetailEodTrickleFeedStatementListPage' });
            };
        }

         if (!db.objectStoreNames.contains('tables')) {
            const tableStore = db.createObjectStore('tables', { keyPath: 'id', autoIncrement: true });
            tableStore.createIndex('table', 'table', { unique: true });

            // // Add initial data
            // tableStore.transaction.oncomplete = function() {
            //     const tableObjectStore = db.transaction('tables', 'readwrite').objectStore('tables');
            //     tableObjectStore.add({ table: 'RetailTransactionTable' });
            //     tableObjectStore.add({ table: 'RetailTransactionSalesTrans' });
            //     tableObjectStore.add({ table: 'RetailTransactionPaymentTrans' });
            //     tableObjectStore.add({ table: 'RetailTransactionTaxTrans' });
            // };
        } 
    };



    request.onsuccess = function(event) {
        const db = event.target.result;
        loadUrls(db);
        loadTables(db);

        addUrlButton.addEventListener('click', function() {
            const newUrl = newUrlInput.value.trim();
            if (newUrl) {
                const transaction = db.transaction('urls', 'readonly');
                const objectStore = transaction.objectStore('urls');
                const index = objectStore.index('url');
                const getRequest = index.get(newUrl);

                getRequest.onsuccess = function() {
                    if (getRequest.result) {
                        alert('The item already exists.');
                    } else {
                        const addTransaction = db.transaction('urls', 'readwrite');
                        const addObjectStore = addTransaction.objectStore('urls');
                        addObjectStore.add({ url: newUrl });

                        addTransaction.oncomplete = function() {
                            const option = document.createElement('option');
                            option.value = newUrl;
                            option.textContent = newUrl;
                            urlInput.appendChild(option);
                            newUrlInput.value = '';
                        };

                        addTransaction.onerror = function() {
                            alert('Failed to add the URL. It might already exist.');
                        };
                    }
                };
            } else {
                alert('Please enter a valid URL string.');
            }
        });

        openUrlButton.addEventListener('click', function() {
            const selectedValue = urlInput.value;
            if (selectedValue) {
                chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                    const tab = tabs[0];
                    const url = new URL(tab.url);
                    const params = new URLSearchParams(url.search);
                    params.set('mi', selectedValue);
                    url.search = params.toString();
                    chrome.tabs.update(tab.id, { url: url.toString() });
                });
            } else {
                alert('Please select a valid value.');
            }
        });

        removeUrlButton.addEventListener('click', function() {
            const selectedValue = urlInput.value;
            if (selectedValue) {
                const transaction = db.transaction('urls', 'readwrite');
                const objectStore = transaction.objectStore('urls');
                const index = objectStore.index('url');

                index.openCursor().onsuccess = function(event) {
                    const cursor = event.target.result;
                    if (cursor) {
                        if (cursor.value.url === selectedValue) {
                            objectStore.delete(cursor.primaryKey);
                            cursor.continue();
                        } else {
                            cursor.continue();
                        }
                    } else {
                        // Remove the option from the dropdown
                        const options = urlInput.options;
                        for (let i = 0; i < options.length; i++) {
                            if (options[i].value === selectedValue) {
                                urlInput.remove(i);
                                break;
                            }
                        }
                    }
                };
            } else {
                alert('Please select a valid value.');
            }
        });

        addTableButton.addEventListener('click', function() {
            const newTable = newTableInput.value.trim();
            addTableHelper(newTable);
        });

        function addTableHelper(newTable){
            if (newTable) {
                const transaction = db.transaction('tables', 'readonly');
                const objectStore = transaction.objectStore('tables');
                const index = objectStore.index('table');
                const getRequest = index.get(newTable);

                getRequest.onsuccess = function() {
                    if (getRequest.result) {
                        alert('The table already exists.');
                    } else {
                        const addTransaction = db.transaction('tables', 'readwrite');
                        const addObjectStore = addTransaction.objectStore('tables');
                        addObjectStore.add({ table: newTable });

                        addTransaction.oncomplete = function() {
                            const option = document.createElement('option');
                            option.value = newTable;
                            option.textContent = newTable;
                            tableInput.appendChild(option);
                            newTableInput.value = '';
                        };

                        addTransaction.onerror = function() {
                            alert('Failed to add the table. It might already exist.');
                        };
                    }
                };
            } else {
                alert('Please enter a valid table name.');
            }
        }

        openTableButton.addEventListener('click', function() {
            openTableBrowserHelper(tableInput.value);
        });

        openTableDirectlyBtn.addEventListener('click', function() {
            openTableBrowserHelper(newTableInput.value);
        });

        function openTableBrowserHelper(selectedTable){
            if (selectedTable) {
                chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                    const tab = tabs[0];
                    const url = new URL(tab.url);
                    const params = new URLSearchParams(url.search);
                    const miValue = params.get('mi');
                    if (miValue) {
                        params.set('mi', 'SysTableBrowser');
                        params.set('tablename', selectedTable);
                        url.search = params.toString();
                        chrome.tabs.update(tab.id, { url: url.toString() });
                    } else {
                        alert('The current URL does not contain the "mi" parameter.');
                    }
                });
            } else {
                alert('Please select a valid table name.');
            }
        }

        removeTableButton.addEventListener('click', function() {
            const selectedTable = tableInput.value;
            if (selectedTable) {
                const transaction = db.transaction('tables', 'readwrite');
                const objectStore = transaction.objectStore('tables');
                const index = objectStore.index('table');

                index.openCursor().onsuccess = function(event) {
                    const cursor = event.target.result;
                    if (cursor) {
                        if (cursor.value.table === selectedTable) {
                            objectStore.delete(cursor.primaryKey);
                            cursor.continue();
                        } else {
                            cursor.continue();
                        }
                    } else {
                        // Remove the option from the dropdown
                        const options = tableInput.options;
                        for (let i = 0; i < options.length; i++) {
                            if (options[i].value === selectedTable) {
                                tableInput.remove(i);
                                break;
                            }
                        }
                    }
                };
            } else {
                alert('Please select a valid table name.');
            }
        });

        runClassButton.addEventListener('click', function() {
            const className = classNameInput.value.trim();
            if (className) {
                chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                    const tab = tabs[0];
                    const url = new URL(tab.url);
                    const params = new URLSearchParams(url.search);
                    const miValue = params.get('mi');
                    if (miValue) {
                        params.set('mi', 'SysClassRunner');
                        params.set('classname', className);
                        url.search = params.toString();
                        chrome.tabs.update(tab.id, { url: url.toString() });
                    } else {
                        alert('The current URL does not contain the "mi" parameter.');
                    }
                });
            } else {
                alert('Please enter a valid class name.');
            }
        });
    };

    function loadUrls(db) {
        const transaction = db.transaction('urls', 'readonly');
        const objectStore = transaction.objectStore('urls');
        const index = objectStore.index('url');

        index.openCursor().onsuccess = function(event) {
            const cursor = event.target.result;
            if (cursor) {
                const option = document.createElement('option');
                option.value = cursor.value.url;
                option.textContent = cursor.value.url;
                urlInput.appendChild(option);
                cursor.continue();
            } else {
                console.log('No more entries!');
            }
        };

        index.openCursor().onerror = function(event) {
            console.error('Error loading URLs:', event.target.error);
        };
    }

    function loadTables(db) {
        const transaction = db.transaction('tables', 'readonly');
        const objectStore = transaction.objectStore('tables');
        const index = objectStore.index('table');

        index.openCursor().onsuccess = function(event) {
            const cursor = event.target.result;
            if (cursor) {
                const option = document.createElement('option');
                option.value = cursor.value.table;
                option.textContent = cursor.value.table;
                tableInput.appendChild(option);
                cursor.continue();
            } else {
                console.log('No more entries!');
            }
        };

        index.openCursor().onerror = function(event) {
            console.error('Error loading tables:', event.target.error);
        };
    }

    // Add event listeners for tab buttons
    favoriteMenusTab.addEventListener('click', function(event) {
        openTab(event, 'FavoriteMenus');
    });

    tableBrowserTab.addEventListener('click', function(event) {
        openTab(event, 'TableBrowser');
    });

    classRunnerTab.addEventListener('click', function(event) {
        openTab(event, 'ClassRunner');
    });

    // Open the default tab
    document.getElementById("favoriteMenusTab").click();
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}