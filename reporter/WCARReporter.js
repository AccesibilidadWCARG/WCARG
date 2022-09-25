class WCARReporter{

    static createHTML(report){

        let reportHtml = '<!DOCTYPE html>' +
            '<html>' +
            '<body>' +
            '' +
            '<h1>My First Heading</h1>' +
            '<p>My first paragraph.</p>' +
            '<p>Hello world, {{username}} </p>' +
            '</body>' +
            '</html>'
          

        return reportHtml;

    }

}

module.exports = {
    "createHTML": WCARReporter.createHTML
}
