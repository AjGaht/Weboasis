var _$_27fd=["\x23\x69\x6E\x70\x75\x74\x5F\x6F\x75\x74\x70\x75\x74","\x74\x61\x5F\x65\x78\x61\x6D\x70\x6C\x65\x73","\x54\x61\x62\x73\x20\x72\x65\x70\x6C\x61\x63\x65\x64\x3A\x20\x30","\x23\x69\x6E\x73\x74\x61\x6E\x63\x65\x73","\x67\x65\x74","\x23\x66\x69\x6C\x65\x5F\x75\x70\x6C\x6F\x61\x64","\x55\x54\x46\x2D\x38","\x4E\x6F\x20\x62\x6C\x6F\x62\x73\x20\x6F\x6E\x20\x49\x45\x20\x76\x65\x72\x3C\x31\x30","\x0D\x0A","\x69\x6E\x70\x75\x74\x5F\x6F\x75\x74\x70\x75\x74","\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E","\x6E\x75\x6C\x6C\x2E\x74\x78\x74","\x46\x69\x6C\x65\x20\x6E\x61\x6D\x65\x3A","\x4E\x65\x77\x20\x44\x6F\x63\x75\x6D\x65\x6E\x74","\x2E\x74\x78\x74","\x61","\x6E\x6F\x6E\x65","","\x63\x68\x69\x6C\x64\x57\x69\x6E\x64\x6F\x77","\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x3D\x79\x65\x73\x2C\x20\x6D\x65\x6E\x75\x62\x61\x72\x3D\x79\x65\x73\x2C\x20\x74\x6F\x6F\x6C\x62\x61\x72\x3D\x79\x65\x73","\x3C\x68\x74\x6D\x6C\x3E\x3C\x68\x65\x61\x64\x3E\x3C\x2F\x68\x65\x61\x64\x3E\x3C\x62\x6F\x64\x79\x3E","\x3C\x62\x72\x3E","\x3C\x2F\x62\x6F\x64\x79\x3E\x3C\x2F\x68\x74\x6D\x6C\x3E","\x09\x48\x65\x6C\x6C\x6F\x09\x57\x6F\x72\x6C\x64\x21","\x0A","\x23\x6E\x75\x6D\x53\x70\x61\x63\x65\x73","\x20","\x63\x68\x65\x63\x6B\x65\x64","\x23\x69\x73\x4C\x65\x61\x64\x69\x6E\x67","\x54\x61\x62\x73\x20\x72\x65\x70\x6C\x61\x63\x65\x64\x3A\x20","\x20\x74\x61\x62\x73\x20\x72\x65\x70\x6C\x61\x63\x65\x64","\x23\x63\x6F\x6E\x76\x65\x72\x74\x54\x61\x62\x73","\x2E\x63\x6C\x69\x70\x62\x6F\x61\x72\x64","\x23\x63\x6C\x65\x61\x72\x41\x6C\x6C\x2C\x20\x23\x65\x64\x69\x74\x5F\x64\x65\x6C\x65\x74\x65\x2C\x20\x23\x66\x69\x6C\x65\x5F\x6E\x65\x77","\x63\x68\x61\x6E\x67\x65","\x23\x66\x69\x6C\x65\x5F\x64\x6F\x77\x6E\x6C\x6F\x61\x64","\x23\x66\x69\x6C\x65\x5F\x70\x72\x69\x6E\x74","\x23\x65\x64\x69\x74\x5F\x75\x6E\x64\x6F","\x23\x65\x64\x69\x74\x5F\x72\x65\x64\x6F","\x23\x65\x64\x69\x74\x5F\x63\x6F\x70\x79","\x23\x65\x64\x69\x74\x5F\x73\x65\x6C\x65\x63\x74"];var area=$(_$_27fd[0]),examples=JSON.parse(localStorage.getItem(_$_27fd[1]));function resetCount(){$(_$_27fd[3]).html(_$_27fd[2])}function loadText(){var b=$(_$_27fd[5])[_$_27fd[4]](0).files[0],g= new FileReader;g.onload= function(b){var g=b.target.result;area.val(g)},g.readAsText(b,_$_27fd[6])}function saveText(b,g){var c=navigator.userAgent.match(/MSIE\s([\d.]+)/),a=navigator.userAgent.match(/Trident\/7.0/)&& navigator.userAgent.match(/rv:11/),d=navigator.userAgent.match(/Edge/g),f=c?c[1]:a?11:d?12:-1;if(c&& f< 10){console.log(_$_27fd[7])}else {g= (g= document.getElementById(_$_27fd[9]).value).replace(/\r?\n/g,_$_27fd[8]);var h= new Blob([g],{type:_$_27fd[10]});if(_$_27fd[11]!= (b= prompt(_$_27fd[12],_$_27fd[13])+ _$_27fd[14])){if(f>  -1){window.navigator.msSaveBlob(h,b)}else {var j=document.createElement(_$_27fd[15]);j.download= b,j.href= window.URL.createObjectURL(h),j.onclick= function(b){document.body.removeChild(b.target)},j.style.display= _$_27fd[16],document.body.appendChild(j),j.click()}}}}function printTextArea(){childWindow= window.open(_$_27fd[17],_$_27fd[18],_$_27fd[19]),childWindow.document.open(),childWindow.document.write(_$_27fd[20]),childWindow.document.write(document.getElementById(_$_27fd[9]).value.replace(/\n/gi,_$_27fd[21])),childWindow.document.write(_$_27fd[22]),childWindow.print(),childWindow.document.close(),childWindow.close()}1== examples&& area.val(_$_27fd[23]),$(_$_27fd[31]).click(function(){Remember();var b=area.val().replace(/\r\n|\r|\n/gm,_$_27fd[24]),g=$(_$_27fd[25]).val();if(null== (c= b.match(/\t/gm))){var c=0}else {c= c.length};var a=_$_27fd[26];if(a= a.repeat(g),null== (d= (b= $(_$_27fd[28]).prop(_$_27fd[27])?b.replace(/^\t/gm,a):b.replace(/\t/gm,a)).match(/\t/gm))){var d=0}else {d= d.length};var f=c- d;area.val(b),$(_$_27fd[3]).html(_$_27fd[29]+ f),Toast(f+ _$_27fd[30]),Remember()}),$(_$_27fd[32]).click(function(){Clipboard(area)}),$(_$_27fd[33]).click(function(){area.val(_$_27fd[17]),resetCount(),Remember()}),$(_$_27fd[5]).on(_$_27fd[34],function(){loadText(),resetCount()}),$(_$_27fd[35]).click(function(){saveText()}),$(_$_27fd[36]).click(function(){printTextArea()}),$(_$_27fd[37]).click(function(){var b=History.undo();void(0)!== b&& area.val(b),resetCount()}),$(_$_27fd[38]).click(function(){var b=History.redo();void(0)!== b&& area.val(b),resetCount()}),$(_$_27fd[39]).click(function(){Clipboard(area)}),$(_$_27fd[40]).click(function(){area.select().focus()});var History=function(){var b=[],g=0;return {remember:function(c){b[g- 1]!== c&& (b.splice(g,10),b.push(c),b.splice(0,b.length- 10),g= b.length)},undo:function(){if(g> 1){return b[--g- 1]}},redo:function(){if(g< b.length){return b[g++]}}}}();function Remember(){var b=area.val();History.remember(b)}Remember()