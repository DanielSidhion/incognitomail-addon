'use strict';

let ws = null;

function setStatusMessage(message) {
  let span = document.getElementById('statusmessage');

  if (span == null) {
    console.log("Something's wrong");
    return;
  }

  span.innerHTML = message;
}

function showTextInput(text) {
  let input = document.createElement('input');
  input.type = 'text';
  input.value = text;

  document.body.appendChild(input);

  return input;
}

function showSettingsButton() {
  let button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Open settings';

  button.onclick = () => {
    chrome.runtime.openOptionsPage();
  };

  document.body.appendChild(button);

  return button;
}

function connectToService(serviceURL, secretToken) {
  ws = new WebSocket(serviceURL);

  ws.onmessage = function (event) {
    if (event.data.indexOf("error") == 0) {
      setStatusMessage('An error happened during the operation.<br/>Details: ' + event.data);
      ws.close();
      return;
    }

    let input = showTextInput(event.data);
    input.select();

    let copySuccessful = true;

    try {
      document.execCommand('copy');
    } catch (e) {
      copySuccessful = false;
    }

    if (copySuccessful) {
      setStatusMessage('New Incognito Mail obtained! It was automatically copied to your clipboard.');
    } else {
      setStatusMessage('New Incognito Mail obtained! Please press Ctrl+C to copy it.');
    }

    ws.close();
  };

  ws.onopen = function (event) {
    ws.send("new handle " + secretToken);
  };
}

function loadSettings() {
  chrome.storage.local.get(null, (res) => {
    if (!res.serviceURL || !res.secretToken) {
      setStatusMessage('Please configure the extension before using!');
      showSettingsButton();
      return;
    }

    connectToService(res.serviceURL, res.secretToken);
  });
}

document.addEventListener('DOMContentLoaded', loadSettings);