#!/bin/bash

#
# Utility to add a directory to PATH (if it's not there already)
# taken from http://superuser.com/a/39995
#
function pathadd() {
    if [ -d "$1" ] && [[ ":$PATH:" != *":$1:"* ]]; then
        PATH="$1:$PATH"
    fi
}

# Add the local ./node_modules/.bin to the front of PATH
pathadd ${PWD}/node_modules/.bin
