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
var format_Calorporzonas_1 = new ol.format.GeoJSON();
var features_Calorporzonas_1 = format_Calorporzonas_1.readFeatures(json_Calorporzonas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Calorporzonas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Calorporzonas_1.addFeatures(features_Calorporzonas_1);
var lyr_Calorporzonas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Calorporzonas_1, 
                style: style_Calorporzonas_1,
                interactive: false,
    title: 'Calor por zonas<br />\
    <img src="styles/legend/Calorporzonas_1_0.png" /> 0 - 23<br />\
    <img src="styles/legend/Calorporzonas_1_1.png" /> 23 - 47<br />\
    <img src="styles/legend/Calorporzonas_1_2.png" /> 47 - 69<br />\
    <img src="styles/legend/Calorporzonas_1_3.png" /> 69 - 110<br />\
    <img src="styles/legend/Calorporzonas_1_4.png" /> 110 - 153<br />'
        });
var format_SinResolver_2 = new ol.format.GeoJSON();
var features_SinResolver_2 = format_SinResolver_2.readFeatures(json_SinResolver_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SinResolver_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SinResolver_2.addFeatures(features_SinResolver_2);
var lyr_SinResolver_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SinResolver_2, 
                style: style_SinResolver_2,
                interactive: true,
                title: '<img src="styles/legend/SinResolver_2.png" /> Sin Resolver'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Calorporzonas_1.setVisible(true);lyr_SinResolver_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Calorporzonas_1,lyr_SinResolver_2];
lyr_Calorporzonas_1.set('fieldAliases', {'id': 'id', 'Nº Asist': 'Nº Asist', 'limpieza': 'limpieza', 'espaciosve': 'espaciosve', 'desbordes': 'desbordes', });
lyr_SinResolver_2.set('fieldAliases', {'Id': 'Id', 'Add': 'Add', 'Pais': 'Pais', 'Provincia': 'Provincia', 'Localidad': 'Localidad', 'TipoAlerta': 'TipoAlerta', 'Descripcio': 'Descripcio', 'FechaHoraI': 'FechaHoraI', 'UsuarioCre': 'UsuarioCre', 'Observacio': 'Observacio', 'Zona': 'Zona', 'EstadoEven': 'EstadoEven', 'Solicitant': 'Solicitant', 'Solicita_1': 'Solicita_1', 'Solicita_2': 'Solicita_2', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Calorporzonas_1.set('fieldImages', {'id': 'TextEdit', 'Nº Asist': 'TextEdit', 'limpieza': 'TextEdit', 'espaciosve': 'TextEdit', 'desbordes': 'TextEdit', });
lyr_SinResolver_2.set('fieldImages', {'Id': 'TextEdit', 'Add': 'TextEdit', 'Pais': 'TextEdit', 'Provincia': 'TextEdit', 'Localidad': 'TextEdit', 'TipoAlerta': 'TextEdit', 'Descripcio': 'TextEdit', 'FechaHoraI': 'TextEdit', 'UsuarioCre': 'TextEdit', 'Observacio': 'TextEdit', 'Zona': 'TextEdit', 'EstadoEven': 'TextEdit', 'Solicitant': 'TextEdit', 'Solicita_1': 'TextEdit', 'Solicita_2': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Calorporzonas_1.set('fieldLabels', {'id': 'no label', 'Nº Asist': 'no label', 'limpieza': 'no label', 'espaciosve': 'no label', 'desbordes': 'no label', });
lyr_SinResolver_2.set('fieldLabels', {'Id': 'inline label', 'Add': 'inline label', 'Pais': 'inline label', 'Provincia': 'inline label', 'Localidad': 'inline label', 'TipoAlerta': 'inline label', 'Descripcio': 'inline label', 'FechaHoraI': 'inline label', 'UsuarioCre': 'inline label', 'Observacio': 'inline label', 'Zona': 'inline label', 'EstadoEven': 'inline label', 'Solicitant': 'inline label', 'Solicita_1': 'inline label', 'Solicita_2': 'inline label', 'result_num': 'inline label', 'osm_id': 'inline label', 'display_na': 'inline label', 'category': 'inline label', 'type': 'inline label', 'latlong': 'inline label', });
lyr_SinResolver_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});