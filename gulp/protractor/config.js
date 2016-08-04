"use strict";
/*eslint-env node*/

exports.config = {
    allScriptsTimeout: 35000,
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,
    jasmineNodeOps: {
        defaultTimeoutInterval: 30000,
        displayStacktrace: 'specs',
        displayFailuresSummary: true,
        displayPendingSummary: true,
        displaySuccessfulSpec: true,
        displayFailedSpec: true,
        displayPendingSpec: false,
        displaySpecDuration: true,
        displaySuiteNumber: false,
        prefixes: {
            success: '✓ ',
            failure: '✗ ',
            pending: '* '
        },
    }
};
