class WCARGOptions {

    static AA = {
        standard: 'WCAG2AA',
        includeNotices: false,
        includeWarnings: false,
        wait: 3000,
        log: {
            debug: console.log,
            error: console.error,
            info: console.log
        }
    };

    static A = {
        standard: 'WCAG2A',
        includeNotices: false,
        includeWarnings: false,
        wait: 3000,
        log: {
            debug: console.log,
            error: console.error,
            info: console.log
        }
    };
}

module.exports = {
    "A":WCARGOptions.A,
    "AA":WCARGOptions.AA
}