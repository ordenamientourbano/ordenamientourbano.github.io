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
    <img src="styles/legend/Nmero_2_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Nmero_2_1.png" /> 0 - 1<br />\
    <img src="styles/legend/Nmero_2_2.png" /> 1 - 2<br />\
    <img src="styles/legend/Nmero_2_3.png" /> 2 - 5<br />\
    <img src="styles/legend/Nmero_2_4.png" /> 5 - 9<br />'
        });
var format_IncumplimientodeNormasdecomercio_3 = new ol.format.GeoJSON();
var features_IncumplimientodeNormasdecomercio_3 = format_IncumplimientodeNormasdecomercio_3.readFeatures(json_IncumplimientodeNormasdecomercio_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IncumplimientodeNormasdecomercio_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IncumplimientodeNormasdecomercio_3.addFeatures(features_IncumplimientodeNormasdecomercio_3);
var lyr_IncumplimientodeNormasdecomercio_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IncumplimientodeNormasdecomercio_3, 
                style: style_IncumplimientodeNormasdecomercio_3,
                interactive: true,
                title: '<img src="styles/legend/IncumplimientodeNormasdecomercio_3.png" /> Incumplimiento de Normas de comercio'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_car_1.setVisible(true);lyr_Nmero_2.setVisible(true);lyr_IncumplimientodeNormasdecomercio_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_car_1,lyr_Nmero_2,lyr_IncumplimientodeNormasdecomercio_3];
lyr_Nmero_2.set('fieldAliases', {'id': 'id', 'Nº Asist': 'Nº Asist', 'limpieza': 'limpieza', 'espaciosve': 'espaciosve', 'bromatologia': 'bromatologia', });
lyr_IncumplimientodeNormasdecomercio_3.set('fieldAliases', {'Direccion': 'Direccion', 'Ubicacion': 'Ubicacion', 'Numeracion': 'Numeracion', 'Localidad': 'Localidad', 'TipoAlerta': 'TipoAlerta', 'Descripcio': 'Descripcio', 'FechaHoraI': 'FechaHoraI', 'UsuarioCre': 'UsuarioCre', 'Observacio': 'Observacio', 'EstadoEven': 'EstadoEven', 'MotivoCamb': 'MotivoCamb', 'Solicitant': 'Solicitant', 'Solicita_1': 'Solicita_1', 'Solicita_2': 'Solicita_2', 'Solicita_3': 'Solicita_3', 'Solicita_4': 'Solicita_4', 'Solicita_5': 'Solicita_5', 'Solicita_6': 'Solicita_6', 'Solicita_7': 'Solicita_7', 'Solicita_8': 'Solicita_8', 'Solicita_9': 'Solicita_9', 'Solicita10': 'Solicita10', 'Solicita11': 'Solicita11', });
lyr_Nmero_2.set('fieldImages', {'id': 'TextEdit', 'Nº Asist': 'TextEdit', 'limpieza': 'TextEdit', 'espaciosve': 'TextEdit', 'bromatologia': 'TextEdit', });
lyr_IncumplimientodeNormasdecomercio_3.set('fieldImages', {'Direccion': 'TextEdit', 'Ubicacion': 'TextEdit', 'Numeracion': 'TextEdit', 'Localidad': 'TextEdit', 'TipoAlerta': 'TextEdit', 'Descripcio': 'TextEdit', 'FechaHoraI': 'TextEdit', 'UsuarioCre': 'TextEdit', 'Observacio': 'TextEdit', 'EstadoEven': 'TextEdit', 'MotivoCamb': 'TextEdit', 'Solicitant': 'TextEdit', 'Solicita_1': 'TextEdit', 'Solicita_2': 'TextEdit', 'Solicita_3': 'TextEdit', 'Solicita_4': 'TextEdit', 'Solicita_5': 'TextEdit', 'Solicita_6': 'TextEdit', 'Solicita_7': 'TextEdit', 'Solicita_8': 'TextEdit', 'Solicita_9': 'TextEdit', 'Solicita10': 'TextEdit', 'Solicita11': 'TextEdit', });
lyr_Nmero_2.set('fieldLabels', {'id': 'no label', 'Nº Asist': 'no label', 'limpieza': 'no label', 'espaciosve': 'no label', 'bromatologia': 'no label', });
lyr_IncumplimientodeNormasdecomercio_3.set('fieldLabels', {'Direccion': 'inline label', 'Ubicacion': 'inline label', 'Numeracion': 'inline label', 'Localidad': 'inline label', 'TipoAlerta': 'inline label', 'Descripcio': 'inline label', 'FechaHoraI': 'inline label', 'UsuarioCre': 'inline label', 'Observacio': 'inline label', 'EstadoEven': 'inline label', 'MotivoCamb': 'inline label', 'Solicitant': 'inline label', 'Solicita_1': 'inline label', 'Solicita_2': 'inline label', 'Solicita_3': 'inline label', 'Solicita_4': 'inline label', 'Solicita_5': 'inline label', 'Solicita_6': 'inline label', 'Solicita_7': 'inline label', 'Solicita_8': 'inline label', 'Solicita_9': 'inline label', 'Solicita10': 'inline label', 'Solicita11': 'inline label', });
lyr_IncumplimientodeNormasdecomercio_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});