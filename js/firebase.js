let scanner = new Instascan.Scanner({ video: document.getElementById('preview'),mirror: false});
            scanner.addListener('scan', function (content) {
              console.log(content);
           /*  localStorage.setItem("value",content);
                window.location.replace(".html");*/
            });
            Instascan.Camera.getCameras().then(function (cameras) {
              if (cameras.length > 0) {
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                          scanner.start(cameras[0]);
                          console.log("phone")
                  }else{
                            scanner.start(cameras[0]);
                  }
            
              } 
                else {
                console.error('No cameras found.');
              }
            }).catch(function (e) {
              console.error(e);
        });
