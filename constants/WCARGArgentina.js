class WCARGArgentina {

    static wcagSet = new Set(        [
        "WCAG2A.Principle1.Guideline1_1.1_1_1",
        "WCAG2A.Principle1.Guideline1_2.1_2_1",
        "WCAG2A.Principle1.Guideline1_2.1_2_2",
        "WCAG2A.Principle1.Guideline1_2.1_2_3",
        "WCAG2AA.Principle1.Guideline1_2.1_2_4",
        "WCAG2AA.Principle1.Guideline1_2.1_2_5",
        "WCAG2A.Principle1.Guideline1_3.1_3_1",
        "WCAG2A.Principle1.Guideline1_3.1_3_2",
        "WCAG2A.Principle1.Guideline1_3.1_3_3",
        "WCAG2A.Principle1.Guideline1_4.1_4_1",
        "WCAG2A.Principle1.Guideline1_4.1_4_2",
        "WCAG2AA.Principle1.Guideline1_4.1_4_3",
        "WCAG2AA.Principle1.Guideline1_4.1_4_4",
        "WCAG2AA.Principle1.Guideline1_4.1_4_5",
        "WCAG2A.Principle2.Guideline2_1.2_1_1",
        "WCAG2A.Principle2.Guideline2_1.2_1_2",
        "WCAG2A.Principle2.Guideline2_2.2_2_1",
        "WCAG2A.Principle2.Guideline2_2.2_2_2",
        "WCAG2A.Principle2.Guideline2_3.2_3_1",
        "WCAG2A.Principle2.Guideline2_4.2_4_1",
        "WCAG2A.Principle2.Guideline2_4.2_4_2",
        "WCAG2A.Principle2.Guideline2_4.2_4_3",
        "WCAG2A.Principle2.Guideline2_4.2_4_4",
        "WCAG2AA.Principle2.Guideline2_4.2_4_5",
        "WCAG2AA.Principle2.Guideline2_4.2_4_6",
        "WCAG2AA.Principle2.Guideline2_4.2_4_7",
        "WCAG2A.Principle3.Guideline3_1.3_1_1",
        "WCAG2AA.Principle3.Guideline3_1.3_1_2",
        "WCAG2A.Principle3.Guideline3_2.3_2_1",
        "WCAG2A.Principle3.Guideline3_2.3_2_2",
        "WCAG2AA.Principle3.Guideline3_2.3_2_3",
        "WCAG2AA.Principle3.Guideline3_2.3_2_4",
        "WCAG2A.Principle3.Guideline3_3.3_3_1",
        "WCAG2A.Principle3.Guideline3_3.3_3_2",
        "WCAG2AA.Principle3.Guideline3_3.3_3_3",
        "WCAG2AA.Principle3.Guideline3_3.3_3_4",
        "WCAG2A.Principle4.Guideline4_1.4_1_1",
        "WCAG2A.Principle4.Guideline4_1.4_1_2"]);

    static  containsWcag(wcagEntry){
        return WCARGArgentina.wcagSet.has(wcagEntry);
    }

}
module.exports = {
    "containsWcag":WCARGArgentina.containsWcag
}
