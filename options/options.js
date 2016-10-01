function saveOptions(e) {
  let currOpt = e.currentTarget.id;

  chrome.storage.local.set({
    [currOpt]: e.currentTarget.value,
  });
}

function restoreOptions() {
  chrome.storage.local.get(null, (res) => {
    if (res.serviceURL) {
      document.getElementById('serviceURL').value = res.serviceURL;
    }

    if (res.secretToken) {
      document.getElementById('secretToken').value = res.secretToken;
    }
  });
}

function optionsSetup() {
  restoreOptions();

  document.getElementById('serviceURL').addEventListener('input', saveOptions);
  document.getElementById('secretToken').addEventListener('input', saveOptions);
}

document.addEventListener('DOMContentLoaded', optionsSetup);