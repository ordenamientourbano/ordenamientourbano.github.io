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
var format_Calorporzonas_2 = new ol.format.GeoJSON();
var features_Calorporzonas_2 = format_Calorporzonas_2.readFeatures(json_Calorporzonas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Calorporzonas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Calorporzonas_2.addFeatures(features_Calorporzonas_2);
var lyr_Calorporzonas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Calorporzonas_2, 
                style: style_Calorporzonas_2,
                interactive: false,
    title: 'Calor por zonas<br />\
    <img src="styles/legend/Calorporzonas_2_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Calorporzonas_2_1.png" /> 0 - 0<br />\
    <img src="styles/legend/Calorporzonas_2_2.png" /> 0 - 1<br />\
    <img src="styles/legend/Calorporzonas_2_3.png" /> 1 - 3<br />\
    <img src="styles/legend/Calorporzonas_2_4.png" /> 3 - 5<br />'
        });
var format_espaciosverdes_3 = new ol.format.GeoJSON();
var features_espaciosverdes_3 = format_espaciosverdes_3.readFeatures(json_espaciosverdes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_espaciosverdes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_espaciosverdes_3.addFeatures(features_espaciosverdes_3);
var lyr_espaciosverdes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_espaciosverdes_3, 
                style: style_espaciosverdes_3,
                interactive: true,
                title: '<img src="styles/legend/espaciosverdes_3.png" /> espaciosverdes'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_car_1.setVisible(true);lyr_Calorporzonas_2.setVisible(true);lyr_espaciosverdes_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_car_1,lyr_Calorporzonas_2,lyr_espaciosverdes_3];
lyr_Calorporzonas_2.set('fieldAliases', {'id': 'id', 'Nº Asist': 'Nº Asist', 'limpieza': 'limpieza', 'espaciosve': 'espaciosve', });
lyr_espaciosverdes_3.set('fieldAliases', {'Id': 'Id', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Direccion': 'Direccion', 'Ubicacion': 'Ubicacion', 'Numeracion': 'Numeracion', 'direcc': 'direcc', 'pais': 'pais', 'provincia': 'provincia', 'Localidad': 'Localidad', 'TipoAlerta': 'TipoAlerta', 'Descripcio': 'Descripcio', 'Prioridad': 'Prioridad', 'FechaHoraI': 'FechaHoraI', 'UsuarioCre': 'UsuarioCre', 'EsPublico': 'EsPublico', 'EstadoPubl': 'EstadoPubl', 'Observacio': 'Observacio', 'Zona': 'Zona', 'EstadoEven': 'EstadoEven', 'MotivoCamb': 'MotivoCamb', 'Solicitant': 'Solicitant', 'Solicita_1': 'Solicita_1', 'Solicita_2': 'Solicita_2', 'Solicita_3': 'Solicita_3', 'Solicita_4': 'Solicita_4', 'Solicita_5': 'Solicita_5', 'Solicita_6': 'Solicita_6', 'Solicita_7': 'Solicita_7', 'Solicita_8': 'Solicita_8', 'Solicita_9': 'Solicita_9', 'Solicita10': 'Solicita10', 'Solicita11': 'Solicita11', 'NumeroRecl': 'NumeroRecl', 'NumeroPart': 'NumeroPart', 'UGC': 'UGC', 'Cuadernill': 'Cuadernill', 'Legajo': 'Legajo', 'PartidaMun': 'PartidaMun', 'Partida': 'Partida', 'Dominio': 'Dominio', 'Convenio': 'Convenio', 'Responsabl': 'Responsabl', 'NumeroRefe': 'NumeroRefe', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Calorporzonas_2.set('fieldImages', {'id': 'TextEdit', 'Nº Asist': 'TextEdit', 'limpieza': 'TextEdit', 'espaciosve': 'TextEdit', });
lyr_espaciosverdes_3.set('fieldImages', {'Id': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Direccion': 'TextEdit', 'Ubicacion': 'TextEdit', 'Numeracion': 'TextEdit', 'direcc': 'TextEdit', 'pais': 'TextEdit', 'provincia': 'TextEdit', 'Localidad': 'TextEdit', 'TipoAlerta': 'TextEdit', 'Descripcio': 'TextEdit', 'Prioridad': 'TextEdit', 'FechaHoraI': 'TextEdit', 'UsuarioCre': 'TextEdit', 'EsPublico': 'TextEdit', 'EstadoPubl': 'TextEdit', 'Observacio': 'TextEdit', 'Zona': 'TextEdit', 'EstadoEven': 'TextEdit', 'MotivoCamb': 'TextEdit', 'Solicitant': 'TextEdit', 'Solicita_1': 'TextEdit', 'Solicita_2': 'TextEdit', 'Solicita_3': 'TextEdit', 'Solicita_4': 'TextEdit', 'Solicita_5': 'TextEdit', 'Solicita_6': 'TextEdit', 'Solicita_7': 'TextEdit', 'Solicita_8': 'TextEdit', 'Solicita_9': 'TextEdit', 'Solicita10': 'TextEdit', 'Solicita11': 'TextEdit', 'NumeroRecl': 'TextEdit', 'NumeroPart': 'TextEdit', 'UGC': 'TextEdit', 'Cuadernill': 'TextEdit', 'Legajo': 'TextEdit', 'PartidaMun': 'TextEdit', 'Partida': 'TextEdit', 'Dominio': 'TextEdit', 'Convenio': 'TextEdit', 'Responsabl': 'TextEdit', 'NumeroRefe': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Calorporzonas_2.set('fieldLabels', {'id': 'no label', 'Nº Asist': 'no label', 'limpieza': 'no label', 'espaciosve': 'no label', });
lyr_espaciosverdes_3.set('fieldLabels', {'Id': 'inline label', 'Latitud': 'no label', 'Longitud': 'no label', 'Direccion': 'inline label', 'Ubicacion': 'inline label', 'Numeracion': 'inline label', 'direcc': 'no label', 'pais': 'no label', 'provincia': 'no label', 'Localidad': 'inline label', 'TipoAlerta': 'inline label', 'Descripcio': 'inline label', 'Prioridad': 'no label', 'FechaHoraI': 'no label', 'UsuarioCre': 'no label', 'EsPublico': 'no label', 'EstadoPubl': 'no label', 'Observacio': 'inline label', 'Zona': 'no label', 'EstadoEven': 'inline label', 'MotivoCamb': 'no label', 'Solicitant': 'no label', 'Solicita_1': 'no label', 'Solicita_2': 'no label', 'Solicita_3': 'no label', 'Solicita_4': 'no label', 'Solicita_5': 'no label', 'Solicita_6': 'no label', 'Solicita_7': 'no label', 'Solicita_8': 'no label', 'Solicita_9': 'no label', 'Solicita10': 'no label', 'Solicita11': 'no label', 'NumeroRecl': 'no label', 'NumeroPart': 'no label', 'UGC': 'no label', 'Cuadernill': 'no label', 'Legajo': 'no label', 'PartidaMun': 'no label', 'Partida': 'no label', 'Dominio': 'no label', 'Convenio': 'no label', 'Responsabl': 'no label', 'NumeroRefe': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_espaciosverdes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});