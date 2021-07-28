var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_car_1 = new ol.layer.Tile({
            'title': 'car',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Nmero_2 = new ol.format.GeoJSON();
var features_Nmero_2 = format_Nmero_2.readFeatures(json_Nmero_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nmero_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nmero_2.addFeatures(features_Nmero_2);
var lyr_Nmero_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nmero_2, 
                style: style_Nmero_2,
                interactive: false,
    title: 'Número<br />\
    <img src="styles/legend/Nmero_2_0.png" /> 0 - 6<br />\
    <img src="styles/legend/Nmero_2_1.png" /> 6 - 14<br />\
    <img src="styles/legend/Nmero_2_2.png" /> 14 - 23<br />\
    <img src="styles/legend/Nmero_2_3.png" /> 23 - 35<br />\
    <img src="styles/legend/Nmero_2_4.png" /> 35 - 42<br />'
        });
var format_ServiciosPblicos_3 = new ol.format.GeoJSON();
var features_ServiciosPblicos_3 = format_ServiciosPblicos_3.readFeatures(json_ServiciosPblicos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiciosPblicos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiciosPblicos_3.addFeatures(features_ServiciosPblicos_3);
var lyr_ServiciosPblicos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ServiciosPblicos_3, 
                style: style_ServiciosPblicos_3,
                interactive: true,
    title: 'Servicios Públicos<br />\
    <img src="styles/legend/ServiciosPblicos_3_0.png" /> Cordón cuneta<br />\
    <img src="styles/legend/ServiciosPblicos_3_1.png" /> Limpieza de calles<br />\
    <img src="styles/legend/ServiciosPblicos_3_2.png" /> Mejora y mantenimiento de plazas y espacios verdes<br />\
    <img src="styles/legend/ServiciosPblicos_3_3.png" /> Poda preventiva<br />\
    <img src="styles/legend/ServiciosPblicos_3_4.png" /> Podas<br />\
    <img src="styles/legend/ServiciosPblicos_3_5.png" /> Riego de Calle<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_car_1.setVisible(true);lyr_Nmero_2.setVisible(true);lyr_ServiciosPblicos_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_car_1,lyr_Nmero_2,lyr_ServiciosPblicos_3];
lyr_Nmero_2.set('fieldAliases', {'id': 'id', 'Nº Asist': 'Nº Asist', 'servPub': 'servPub', });
lyr_ServiciosPblicos_3.set('fieldAliases', {'Id': 'Id', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Direccion': 'Direccion', 'Ubicacion': 'Ubicacion', 'Numeracion': 'Numeracion', 'direcc': 'direcc', 'pais': 'pais', 'provincia': 'provincia', 'Localidad': 'Localidad', 'TipoAlerta': 'TipoAlerta', 'Descripcio': 'Descripcio', 'Prioridad': 'Prioridad', 'FechaHoraI': 'FechaHoraI', 'UsuarioCre': 'UsuarioCre', 'EsPublico': 'EsPublico', 'EstadoPubl': 'EstadoPubl', 'Observacio': 'Observacio', 'Zona': 'Zona', 'EstadoEven': 'EstadoEven', 'MotivoCamb': 'MotivoCamb', 'Solicitant': 'Solicitant', 'Solicita_1': 'Solicita_1', 'Solicita_2': 'Solicita_2', 'Solicita_3': 'Solicita_3', 'Solicita_4': 'Solicita_4', 'Solicita_5': 'Solicita_5', 'Solicita_6': 'Solicita_6', 'Solicita_7': 'Solicita_7', 'Solicita_8': 'Solicita_8', 'Solicita_9': 'Solicita_9', 'Solicita10': 'Solicita10', 'Solicita11': 'Solicita11', 'NumeroRecl': 'NumeroRecl', 'NumeroPart': 'NumeroPart', 'UGC': 'UGC', 'Cuadernill': 'Cuadernill', 'Legajo': 'Legajo', 'PartidaMun': 'PartidaMun', 'Partida': 'Partida', 'Dominio': 'Dominio', 'Convenio': 'Convenio', 'Responsabl': 'Responsabl', 'NumeroRefe': 'NumeroRefe', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Nmero_2.set('fieldImages', {'id': 'TextEdit', 'Nº Asist': 'TextEdit', 'servPub': 'TextEdit', });
lyr_ServiciosPblicos_3.set('fieldImages', {'Id': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Direccion': 'TextEdit', 'Ubicacion': 'TextEdit', 'Numeracion': 'TextEdit', 'direcc': 'TextEdit', 'pais': 'TextEdit', 'provincia': 'TextEdit', 'Localidad': 'TextEdit', 'TipoAlerta': 'TextEdit', 'Descripcio': 'TextEdit', 'Prioridad': 'TextEdit', 'FechaHoraI': 'TextEdit', 'UsuarioCre': 'TextEdit', 'EsPublico': 'TextEdit', 'EstadoPubl': 'TextEdit', 'Observacio': 'TextEdit', 'Zona': 'TextEdit', 'EstadoEven': 'TextEdit', 'MotivoCamb': 'TextEdit', 'Solicitant': 'TextEdit', 'Solicita_1': 'TextEdit', 'Solicita_2': 'TextEdit', 'Solicita_3': 'TextEdit', 'Solicita_4': 'TextEdit', 'Solicita_5': 'TextEdit', 'Solicita_6': 'TextEdit', 'Solicita_7': 'TextEdit', 'Solicita_8': 'TextEdit', 'Solicita_9': 'TextEdit', 'Solicita10': 'TextEdit', 'Solicita11': 'TextEdit', 'NumeroRecl': 'TextEdit', 'NumeroPart': 'TextEdit', 'UGC': 'TextEdit', 'Cuadernill': 'TextEdit', 'Legajo': 'TextEdit', 'PartidaMun': 'TextEdit', 'Partida': 'TextEdit', 'Dominio': 'TextEdit', 'Convenio': 'TextEdit', 'Responsabl': 'TextEdit', 'NumeroRefe': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Nmero_2.set('fieldLabels', {'id': 'no label', 'Nº Asist': 'no label', 'servPub': 'no label', });
lyr_ServiciosPblicos_3.set('fieldLabels', {'Id': 'inline label', 'Latitud': 'no label', 'Longitud': 'no label', 'Direccion': 'inline label', 'Ubicacion': 'inline label', 'Numeracion': 'inline label', 'direcc': 'inline label', 'pais': 'no label', 'provincia': 'no label', 'Localidad': 'no label', 'TipoAlerta': 'inline label', 'Descripcio': 'inline label', 'Prioridad': 'inline label', 'FechaHoraI': 'no label', 'UsuarioCre': 'inline label', 'EsPublico': 'inline label', 'EstadoPubl': 'inline label', 'Observacio': 'inline label', 'Zona': 'inline label', 'EstadoEven': 'inline label', 'MotivoCamb': 'inline label', 'Solicitant': 'inline label', 'Solicita_1': 'no label', 'Solicita_2': 'no label', 'Solicita_3': 'no label', 'Solicita_4': 'no label', 'Solicita_5': 'no label', 'Solicita_6': 'no label', 'Solicita_7': 'no label', 'Solicita_8': 'no label', 'Solicita_9': 'no label', 'Solicita10': 'no label', 'Solicita11': 'no label', 'NumeroRecl': 'no label', 'NumeroPart': 'no label', 'UGC': 'no label', 'Cuadernill': 'no label', 'Legajo': 'no label', 'PartidaMun': 'no label', 'Partida': 'no label', 'Dominio': 'no label', 'Convenio': 'no label', 'Responsabl': 'no label', 'NumeroRefe': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_ServiciosPblicos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});