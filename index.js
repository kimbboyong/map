var mapDiv = document.getElementById('map');

var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.5167635, 127.0329551),
    zoom: 17
});

var circle;
var circleRadius = 100;

var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.5167635, 127.0329551),
    map: map,
    title: '아트컨티뉴',
    icon: {
        content: [
            `<div style="padding:5px; background:#f39700; color: #fff; text-align:center; border: 1px solid #fff; opacity:.75;">
                <div style="font-weight: bold; font-size:16px">아트컨티뉴</div>
            </div >`
        ].join(''),
        size: new naver.maps.Size(38.58),
        anchor: new naver.maps.Point(19, 58),
    },
    draggable: false
});

naver.maps.Event.addListener(marker, 'click', function (e) {
    var clickedLatLng = e.coord;

    if (circle) {
        circle.setMap(null);
    }

    circle = new naver.maps.Circle({
        map: map,
        center: clickedLatLng,
        radius: circleRadius,
        fillColor: '#f39700',
        fillOpacity: 0.3,
        strokeColor: '#f39700',
        strokeOpacity: 0.8,
        strokeWeight: 2
    });

    var contentString = '반경: ' + circleRadius + ' 미터';
    var infoWindow = new naver.maps.InfoWindow({
        content: contentString
    });
    infoWindow.open(map, marker);
});