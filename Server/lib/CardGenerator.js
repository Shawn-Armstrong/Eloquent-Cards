class CardGenerator {
    /**
     * @param {Object} doc - jsPDF doc object
     * @param {Object} config - infomation provided by user
        * @param {string} config.name
        * @param {string} config.phone_number
        * @param {string} config.email
        * @param {string} config.website
        * @param {string} config.address
        * @param {string} config.company
        * @param {string} config.icon_data - image_url, empty string = not provided
        * 
     */
    constructor(doc, config){
        this.doc = doc;
        this.config = config;
        this._warning = this._input_test();
    }

    /**
     * 
     * @param {Object} template 
        * @param {int} template.text_json     - json file for templates
        * @param {int} template.front_imgdata - template image url
        * @param {int} template.back_imgdata  - template image url
     */
    draw(template){
      //wrapper function which does some input check if needed 
      return this._draw_template(template);
    }

    input_stats(){
      return this._warning;
    }

    _draw_template(template){
      const X = 10; const Y = 10; //Top left cords
      let doc = this.doc; let config = this.config;
      let tmp = template.text_json;
      //add front and back
      doc.addImage(template.front_imgdata, 'JPEG', X, Y, 90, 50);
      doc.addImage(template.back_imgdata, 'JPEG', X, Y+60, 90, 50);
      //name

      doc.setFont("Sen-Regular","normal");
      //doc.setFont("SourceHanSansSC-VF","normal");
      doc.setFontSize(tmp.font_size.name);
      doc.text(config.name, X + tmp.name.x, Y + tmp.name.y, {maxWidth: 35});

      //detail
      doc.setFontSize(tmp.font_size.detail);
      for(const section in tmp.detail){
        doc.text(config[section], X + tmp.detail[section].x,  Y + tmp.detail[section].y,  {maxWidth: 30}); 
      }
      
      //company icon, only name if not provided
      if(config.icon_data == "" || config.icon_data == undefined){
        doc.setFontSize(tmp.font_size.company);
        doc.text(config.company, X + tmp.company.x, Y + tmp.company.y, {align: "center", maxWidth: 30});
      }else{
        doc.addImage(config.icon_data, 'JPEG', X + tmp.icon_data.x, Y + tmp.icon_data.y, tmp.icon_data.w, tmp.icon_data.h);
        doc.setFontSize(tmp.font_size.company);
        doc.text(config.company, X + tmp.company.x_img, Y + tmp.company.y_img, {align: "center", maxWidth: 30});
      }
      return doc;
    }

    _input_test(){
      return {
        VALID_STRING: this._string_test(),
        ASCII_ONLY: this._ascii_test(),
        NECESSARY_INFO: this._optional_test()
      }
    }
    _string_test(){
      for(const section in this.config){
        if(typeof this.config[section] != 'string'){
          return false;
        }
      }
      return true;
    }
    _optional_test(){
      for(const section in this.config){
        let isEmpty = /^\s*$/.test(this.config[section])
        if(isEmpty && (section != 'icon_data') && (section != 'subtitle')){
          return false;
        }
      }
      return true;
    }
    _ascii_test(){
        for(const section in this.config){
          let isAscii = /^[\x00-\x7F]*$/.test(this.config[section])
          if(!isAscii){
            console.log("Section: [" + section + "] contains non-Ascii character: " +  this.config[section]);
            return false;
          }
        }
        return true;
    }
}
module.exports = CardGenerator;



/*
  //Hard coded tp1

    draw(template){
    let _draw_template = '_draw_template_' + template.type.toString();
    if(typeof this[_draw_template] === 'function'){
      this.t_url_front = template.template_data_front;
      this.t_url_back = template.template_data_back;
      this[_draw_template]();
    }else{
      console.log('Invalid template number.');
    }
    return this.doc;
  }

  _draw_template_1(){
    const X = 10; const Y = 10; //Top left cords
    let doc = this.doc; let config = this.config;
    //add front and back
    doc.addImage(this.t_url_front, 'JPEG', X, Y, 90, 50);
    doc.addImage(this.t_url_back, 'JPEG', X, Y+60, 90, 50);
    //name
    doc.setFont("Sen-Regular","normal");
    doc.setFontSize(14);
    doc.text(config.name, X + 45, Y + 10, {maxWidth: 35});
    //detail
    doc.setFontSize(6);
    doc.text(config.phone_number, X + 47, Y + 31.5, {maxWidth: 30}); 
    doc.text(config.email, X + 47, Y + 34, {maxWidth: 30});
    doc.text(config.website, X + 47, Y + 37, {maxWidth: 30});
    doc.text(config.address, X + 47, Y + 40, {maxWidth: 30});
    //company icon, only name if not provided
    if(config.icon_data == "" || config.icon_data == undefined){
      doc.setFontSize(12);
      doc.text(config.company, X + 20, Y + 27, {align: "center", maxWidth: 30});
    }else{
      doc.addImage(config.icon_data, 'JPEG', X +  11.5, Y + 11.5, 20, 20);
      doc.setFontSize(12);
      doc.text(config.company, X + 20, Y + 37, {align: "center", maxWidth: 30});
    }
    return doc;
  }
*/