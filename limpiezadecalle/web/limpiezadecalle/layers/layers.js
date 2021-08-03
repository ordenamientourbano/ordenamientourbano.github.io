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
    <img src="styles/legend/Calorporzonas_2_0.png" /> 0 - 3<br />\
    <img src="styles/legend/Calorporzonas_2_1.png" /> 3 - 10<br />\
    <img src="styles/legend/Calorporzonas_2_2.png" /> 10 - 17<br />\
    <img src="styles/legend/Calorporzonas_2_3.png" /> 17 - 25<br />\
    <img src="styles/legend/Calorporzonas_2_4.png" /> 25 - 30<br />'
        });
var format_Limpiezadecalles_3 = new ol.format.GeoJSON();
var features_Limpiezadecalles_3 = format_Limpiezadecalles_3.readFeatures(json_Limpiezadecalles_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limpiezadecalles_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limpiezadecalles_3.addFeatures(features_Limpiezadecalles_3);
var lyr_Limpiezadecalles_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limpiezadecalles_3, 
                style: style_Limpiezadecalles_3,
                interactive: true,
                title: '<img src="styles/legend/Limpiezadecalles_3.png" /> Limpieza de calles'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_car_1.setVisible(true);lyr_Calorporzonas_2.setVisible(true);lyr_Limpiezadecalles_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_car_1,lyr_Calorporzonas_2,lyr_Limpiezadecalles_3];
lyr_Calorporzonas_2.set('fieldAliases', {'id': 'id', 'Nº Asist': 'Nº Asist', 'limpieza': 'limpieza', });
lyr_Limpiezadecalles_3.set('fieldAliases', {'Id': 'Id', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Direccion': 'Direccion', 'Ubicacion': 'Ubicacion', 'Numeracion': 'Numeracion', 'direcc': 'direcc', 'pais': 'pais', 'provincia': 'provincia', 'Localidad': 'Localidad', 'TipoAlerta': 'TipoAlerta', 'Descripcio': 'Descripcio', 'Prioridad': 'Prioridad', 'FechaHoraI': 'FechaHoraI', 'UsuarioCre': 'UsuarioCre', 'EsPublico': 'EsPublico', 'EstadoPubl': 'EstadoPubl', 'Observacio': 'Observacio', 'Zona': 'Zona', 'EstadoEven': 'EstadoEven', 'MotivoCamb': 'MotivoCamb', 'Solicitant': 'Solicitant', 'Solicita_1': 'Solicita_1', 'Solicita_2': 'Solicita_2', 'Solicita_3': 'Solicita_3', 'Solicita_4': 'Solicita_4', 'Solicita_5': 'Solicita_5', 'Solicita_6': 'Solicita_6', 'Solicita_7': 'Solicita_7', 'Solicita_8': 'Solicita_8', 'Solicita_9': 'Solicita_9', 'Solicita10': 'Solicita10', 'Solicita11': 'Solicita11', 'NumeroRecl': 'NumeroRecl', 'NumeroPart': 'NumeroPart', 'UGC': 'UGC', 'Cuadernill': 'Cuadernill', 'Legajo': 'Legajo', 'PartidaMun': 'PartidaMun', 'Partida': 'Partida', 'Dominio': 'Dominio', 'Convenio': 'Convenio', 'Responsabl': 'Responsabl', 'NumeroRefe': 'NumeroRefe', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Calorporzonas_2.set('fieldImages', {'id': 'TextEdit', 'Nº Asist': 'TextEdit', 'limpieza': 'TextEdit', });
lyr_Limpiezadecalles_3.set('fieldImages', {'Id': '', 'Latitud': '', 'Longitud': '', 'Direccion': '', 'Ubicacion': '', 'Numeracion': '', 'direcc': '', 'pais': '', 'provincia': '', 'Localidad': '', 'TipoAlerta': '', 'Descripcio': '', 'Prioridad': '', 'FechaHoraI': '', 'UsuarioCre': '', 'EsPublico': '', 'EstadoPubl': '', 'Observacio': '', 'Zona': '', 'EstadoEven': '', 'MotivoCamb': '', 'Solicitant': '', 'Solicita_1': '', 'Solicita_2': '', 'Solicita_3': '', 'Solicita_4': '', 'Solicita_5': '', 'Solicita_6': '', 'Solicita_7': '', 'Solicita_8': '', 'Solicita_9': '', 'Solicita10': '', 'Solicita11': '', 'NumeroRecl': '', 'NumeroPart': '', 'UGC': '', 'Cuadernill': '', 'Legajo': '', 'PartidaMun': '', 'Partida': '', 'Dominio': '', 'Convenio': '', 'Responsabl': '', 'NumeroRefe': '', 'result_num': '', 'osm_id': '', 'display_na': '', 'category': '', 'type': '', 'latlong': '', });
lyr_Calorporzonas_2.set('fieldLabels', {'id': 'no label', 'Nº Asist': 'no label', 'limpieza': 'no label', });
lyr_Limpiezadecalles_3.set('fieldLabels', {'Id': 'inline label', 'Latitud': 'no label', 'Longitud': 'no label', 'Direccion': 'inline label', 'Ubicacion': 'inline label', 'Numeracion': 'inline label', 'direcc': 'no label', 'pais': 'no label', 'provincia': 'no label', 'Localidad': 'inline label', 'TipoAlerta': 'inline label', 'Descripcio': 'inline label', 'Prioridad': 'no label', 'FechaHoraI': 'no label', 'UsuarioCre': 'no label', 'EsPublico': 'no label', 'EstadoPubl': 'no label', 'Observacio': 'no label', 'Zona': 'no label', 'EstadoEven': 'no label', 'MotivoCamb': 'no label', 'Solicitant': 'no label', 'Solicita_1': 'no label', 'Solicita_2': 'no label', 'Solicita_3': 'no label', 'Solicita_4': 'no label', 'Solicita_5': 'no label', 'Solicita_6': 'no label', 'Solicita_7': 'no label', 'Solicita_8': 'no label', 'Solicita_9': 'no label', 'Solicita10': 'no label', 'Solicita11': 'no label', 'NumeroRecl': 'no label', 'NumeroPart': 'no label', 'UGC': 'no label', 'Cuadernill': 'no label', 'Legajo': 'no label', 'PartidaMun': 'no label', 'Partida': 'no label', 'Dominio': 'no label', 'Convenio': 'no label', 'Responsabl': 'no label', 'NumeroRefe': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Limpiezadecalles_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});