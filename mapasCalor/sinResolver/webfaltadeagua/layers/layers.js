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
var format_Nmero_1 = new ol.format.GeoJSON();
var features_Nmero_1 = format_Nmero_1.readFeatures(json_Nmero_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nmero_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nmero_1.addFeatures(features_Nmero_1);
var lyr_Nmero_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nmero_1, 
                style: style_Nmero_1,
                interactive: false,
    title: 'Número<br />\
    <img src="styles/legend/Nmero_1_0.png" /> 0 - 3<br />\
    <img src="styles/legend/Nmero_1_1.png" /> 3 - 6<br />\
    <img src="styles/legend/Nmero_1_2.png" /> 6 - 15<br />\
    <img src="styles/legend/Nmero_1_3.png" /> 15 - 31<br />\
    <img src="styles/legend/Nmero_1_4.png" /> 31 - 40<br />'
        });
var format_noresueltos_2 = new ol.format.GeoJSON();
var features_noresueltos_2 = format_noresueltos_2.readFeatures(json_noresueltos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_noresueltos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_noresueltos_2.addFeatures(features_noresueltos_2);
var lyr_noresueltos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_noresueltos_2, 
                style: style_noresueltos_2,
                interactive: true,
    title: 'noresueltos<br />\
    <img src="styles/legend/noresueltos_2_0.png" /> Creado<br />\
    <img src="styles/legend/noresueltos_2_1.png" /> Rechazado<br />\
    <img src="styles/legend/noresueltos_2_2.png" /> Reiterado<br />\
    <img src="styles/legend/noresueltos_2_3.png" /> Resuelto<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Nmero_1.setVisible(true);lyr_noresueltos_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Nmero_1,lyr_noresueltos_2];
lyr_Nmero_1.set('fieldAliases', {'id': 'id', 'Nº Asist': 'Nº Asist', 'limpieza': 'limpieza', 'espaciosve': 'espaciosve', 'faltadeagua': 'faltadeagua', });
lyr_noresueltos_2.set('fieldAliases', {'Id': 'Id', 'add': 'add', 'Localidad': 'Localidad', 'provincia': 'provincia', 'pais': 'pais', 'TipoAlerta': 'TipoAlerta', 'Descripcio': 'Descripcio', 'FechaHoraI': 'FechaHoraI', 'UsuarioCre': 'UsuarioCre', 'Observacio': 'Observacio', 'EstadoEven': 'EstadoEven', 'MotivoCamb': 'MotivoCamb', 'Solicitant': 'Solicitant', 'Solicita_1': 'Solicita_1', 'Solicita_2': 'Solicita_2', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Nmero_1.set('fieldImages', {'id': 'TextEdit', 'Nº Asist': 'TextEdit', 'limpieza': 'TextEdit', 'espaciosve': 'TextEdit', 'faltadeagua': 'TextEdit', });
lyr_noresueltos_2.set('fieldImages', {'Id': 'TextEdit', 'add': 'TextEdit', 'Localidad': 'TextEdit', 'provincia': 'TextEdit', 'pais': 'TextEdit', 'TipoAlerta': 'TextEdit', 'Descripcio': 'TextEdit', 'FechaHoraI': 'TextEdit', 'UsuarioCre': 'TextEdit', 'Observacio': 'TextEdit', 'EstadoEven': 'TextEdit', 'MotivoCamb': 'TextEdit', 'Solicitant': 'TextEdit', 'Solicita_1': 'TextEdit', 'Solicita_2': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Nmero_1.set('fieldLabels', {'id': 'no label', 'Nº Asist': 'no label', 'limpieza': 'no label', 'espaciosve': 'no label', 'faltadeagua': 'no label', });
lyr_noresueltos_2.set('fieldLabels', {'Id': 'inline label', 'add': 'inline label', 'Localidad': 'inline label', 'provincia': 'inline label', 'pais': 'inline label', 'TipoAlerta': 'inline label', 'Descripcio': 'inline label', 'FechaHoraI': 'inline label', 'UsuarioCre': 'inline label', 'Observacio': 'inline label', 'EstadoEven': 'inline label', 'MotivoCamb': 'inline label', 'Solicitant': 'inline label', 'Solicita_1': 'inline label', 'Solicita_2': 'inline label', 'result_num': 'inline label', 'osm_id': 'inline label', 'display_na': 'inline label', 'category': 'inline label', 'type': 'inline label', 'latlong': 'inline label', });
lyr_noresueltos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});