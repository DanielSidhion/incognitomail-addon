IncognitoMail-Addon
====

IncognitoMail is a proof of concept implementation for the
[Incognito Emails](https://sidhion.com/blog/post/incognito-email-idea/)
idea.

This is the front-end part of the implementation.
It's a browser add-on
that communicates with the server in the
[back-end project](https://github.com/DanielSidhion/incognitomail).
All this add-on currently does is
request a new Incognito Email whenever you want
and display it to you.

## How it works

After installing the add-on, you will be prompted to configure it
on your first use.
After configuring with your server's address and your secret token,
whenever you click the add-on icon on your browser,
you should receive a brand new Incognito Email ready to use.
For more details on how this works behind the scenes,
please check the back-end project.

## Current and future features and fixes

- [x] Add a shortcut on the pop-up to go to the preferences page
- [x] Improve how errors and error messages are handled
- [ ] Add support for more account management (listing and deleting handles, changing secret token, etc.)

## Installing

For now, install the add-on through the
[releases](https://github.com/DanielSidhion/incognitomail-addon/releases)
page.
Eventually I'll make the add-on available on the
[Mozilla repository](https://addons.mozilla.org).