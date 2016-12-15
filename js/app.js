function MyCtrl ($scope){
    
    $scope.title = "Afinador Analogico de Violão";
    
    $scope.abrir = function (valor){
        
        
        var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) { 
  admobid = { // for Android
    banner: ' ca-app-pub-8613086499405343/5182053707',
    interstitial: ' ca-app-pub-8613086499405343/5182053707'
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: ' ca-app-pub-8613086499405343/5182053707',
    interstitial: ' ca-app-pub-8613086499405343/5182053707'
  };
} else {
  admobid = { // for Windows Phone
    banner: ' ca-app-pub-8613086499405343/5182053707',
    interstitial: ' ca-app-pub-8613086499405343/5182053707'
  };
}

function initApp() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

  
    if(valor == 1){
         AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    isTesting: true, // TODO: remove this line when release
    overlap: false,
    offsetTopBar: false,
    bgColor: 'black'
  } );
        
    }else{
        
         AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    isTesting: true, // TODO: remove this line when release
    autoShow: true
  });
}
} 

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}
        
        
    }
}