var _$_b68d=["\x23\x69\x6E\x70\x75\x74\x5F\x6F\x75\x74\x70\x75\x74","\x74\x61\x5F\x65\x78\x61\x6D\x70\x6C\x65\x73","","\x20","\x67","\x09","\x53\x70\x61\x63\x65\x73\x20\x72\x65\x70\x6C\x61\x63\x65\x64\x3A\x20\x30","\x23\x69\x6E\x73\x74\x61\x6E\x63\x65\x73","\x67\x65\x74","\x23\x66\x69\x6C\x65\x5F\x75\x70\x6C\x6F\x61\x64","\x55\x54\x46\x2D\x38","\x4E\x6F\x20\x62\x6C\x6F\x62\x73\x20\x6F\x6E\x20\x49\x45\x20\x76\x65\x72\x3C\x31\x30","\x0D\x0A","\x69\x6E\x70\x75\x74\x5F\x6F\x75\x74\x70\x75\x74","\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E","\x6E\x75\x6C\x6C\x2E\x74\x78\x74","\x46\x69\x6C\x65\x20\x6E\x61\x6D\x65\x3A","\x4E\x65\x77\x20\x44\x6F\x63\x75\x6D\x65\x6E\x74","\x2E\x74\x78\x74","\x61","\x6E\x6F\x6E\x65","\x63\x68\x69\x6C\x64\x57\x69\x6E\x64\x6F\x77","\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x3D\x79\x65\x73\x2C\x20\x6D\x65\x6E\x75\x62\x61\x72\x3D\x79\x65\x73\x2C\x20\x74\x6F\x6F\x6C\x62\x61\x72\x3D\x79\x65\x73","\x3C\x68\x74\x6D\x6C\x3E\x3C\x68\x65\x61\x64\x3E\x3C\x2F\x68\x65\x61\x64\x3E\x3C\x62\x6F\x64\x79\x3E","\x3C\x62\x72\x3E","\x3C\x2F\x62\x6F\x64\x79\x3E\x3C\x2F\x68\x74\x6D\x6C\x3E","\x20\x20\x20\x20\x48\x65\x6C\x6C\x6F\x20\x57\x6F\x72\x6C\x64\x21\x0A\x20\x20\x20\x20\x48\x65\x6C\x6C\x6F\x20\x57\x6F\x72\x6C\x64\x21\x0A\x20\x20\x20\x20\x48\x65\x6C\x6C\x6F\x20\x57\x6F\x72\x6C\x64\x21\x0A\x20\x20\x20\x20\x48\x65\x6C\x6C\x6F\x20\x57\x6F\x72\x6C\x64\x21","\x0A","\x23\x6E\x75\x6D\x53\x70\x61\x63\x65\x73","\x52\x65\x70\x6C\x61\x63\x65\x64","\x23\x63\x6F\x6E\x76\x65\x72\x74\x53\x70\x61\x63\x65\x73","\x2E\x63\x6C\x69\x70\x62\x6F\x61\x72\x64","\x23\x63\x6C\x65\x61\x72\x41\x6C\x6C\x2C\x20\x23\x65\x64\x69\x74\x5F\x64\x65\x6C\x65\x74\x65\x2C\x20\x23\x66\x69\x6C\x65\x5F\x6E\x65\x77","\x63\x68\x61\x6E\x67\x65","\x23\x66\x69\x6C\x65\x5F\x64\x6F\x77\x6E\x6C\x6F\x61\x64","\x23\x66\x69\x6C\x65\x5F\x70\x72\x69\x6E\x74","\x23\x65\x64\x69\x74\x5F\x75\x6E\x64\x6F","\x23\x65\x64\x69\x74\x5F\x72\x65\x64\x6F","\x23\x65\x64\x69\x74\x5F\x63\x6F\x70\x79","\x23\x65\x64\x69\x74\x5F\x73\x65\x6C\x65\x63\x74"];var area=$(_$_b68d[0]),examples=JSON.parse(localStorage.getItem(_$_b68d[1]));function SpacestoTab(a,b){for(var c=_$_b68d[2],h=0;h< b;h++){c+= _$_b68d[3]};var d= new RegExp(c,_$_b68d[4]);return  delete c,a= a.replace(d,_$_b68d[5])}function resetCount(){$(_$_b68d[7]).html(_$_b68d[6])}function loadText(){var a=$(_$_b68d[9])[_$_b68d[8]](0).files[0],b= new FileReader;b.onload= function(a){var b=a.target.result;area.val(b)},b.readAsText(a,_$_b68d[10])}function saveText(a,b){var c=navigator.userAgent.match(/MSIE\s([\d.]+)/),h=navigator.userAgent.match(/Trident\/7.0/)&& navigator.userAgent.match(/rv:11/),d=navigator.userAgent.match(/Edge/g),j=c?c[1]:h?11:d?12:-1;if(c&& j< 10){console.log(_$_b68d[11])}else {b= (b= document.getElementById(_$_b68d[13]).value).replace(/\r?\n/g,_$_b68d[12]);var g= new Blob([b],{type:_$_b68d[14]});if(_$_b68d[15]!= (a= prompt(_$_b68d[16],_$_b68d[17])+ _$_b68d[18])){if(j>  -1){window.navigator.msSaveBlob(g,a)}else {var f=document.createElement(_$_b68d[19]);f.download= a,f.href= window.URL.createObjectURL(g),f.onclick= function(a){document.body.removeChild(a.target)},f.style.display= _$_b68d[20],document.body.appendChild(f),f.click()}}}}function printTextArea(){childWindow= window.open(_$_b68d[2],_$_b68d[21],_$_b68d[22]),childWindow.document.open(),childWindow.document.write(_$_b68d[23]),childWindow.document.write(document.getElementById(_$_b68d[13]).value.replace(/\n/gi,_$_b68d[24])),childWindow.document.write(_$_b68d[25]),childWindow.print(),childWindow.document.close(),childWindow.close()}1== examples&& area.val(_$_b68d[26]),$(_$_b68d[30]).click(function(){Remember();var a=area.val().replace(/\r\n|\r|\n/gm,_$_b68d[27]);a= SpacestoTab(a,$(_$_b68d[28]).val()),area.val(a),Toast(_$_b68d[29]),Remember()}),$(_$_b68d[31]).click(function(){Clipboard(area)}),$(_$_b68d[32]).click(function(){area.val(_$_b68d[2]),resetCount(),Remember()}),$(_$_b68d[9]).on(_$_b68d[33],function(){loadText(),resetCount()}),$(_$_b68d[34]).click(function(){saveText()}),$(_$_b68d[35]).click(function(){printTextArea()}),$(_$_b68d[36]).click(function(){var a=History.undo();void(0)!== a&& area.val(a),resetCount()}),$(_$_b68d[37]).click(function(){var a=History.redo();void(0)!== a&& area.val(a),resetCount()}),$(_$_b68d[38]).click(function(){Clipboard(area)}),$(_$_b68d[39]).click(function(){area.select().focus()});var History=function(){var a=[],b=0;return {remember:function(c){a[b- 1]!== c&& (a.splice(b,10),a.push(c),a.splice(0,a.length- 10),b= a.length)},undo:function(){if(b> 1){return a[--b- 1]}},redo:function(){if(b< a.length){return a[b++]}}}}();function Remember(){var a=area.val();History.remember(a)}Remember()