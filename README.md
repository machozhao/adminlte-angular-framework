# prealarm-frontend

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Init
```sh
yo angular
```
## Add deps for AdminLte, 
```sh
bower install bootstrap-slider --save
bower install bootstrap-wysihtml5 --save
bower install chartjs--save
bower install chartjs --save
bower install ckeditor --save
bower install colorpicker --save
bower install datatables --save
bower install datatables --save
```

## In datepicker original project, bower.json missing main definition, this will produce err: 
## Running "wiredep:app" (wiredep) task.  Warning: must provide pattern Use --force to continue.
## To fix this error:
## Edit bower_components/datepicker/bower.json, modify "main": "" to "main": "js/bootstrap-datepicker.js",
## 
```sh
bower install angular-ui-router --save
bower install angular-bootstrap --save
bower install datepicker --save
bower install daterangepickerpicker --save
bower install daterangepicker --save
bower install fastclick --save
bower install flot --save
bower install fullcalendar --save
bower install iCheck --save
## input-mask not found
bower install input-mask --save
## ionslider not found
bower install ionslider --save
bower install jvectormap --save
bower install jquery-ui --save
bower install knob --save
bower install morrisjs --save
bower install pace --save
bower install select2 --save
bower install slimScroll --save
bower install sparkline --save
bower install timepicker --save
  
bower install components-font-awesome --save
bower install ionicons --save

bower install admin-lte
```

```sh
copy all images from AdminLTE/dist/img to app/images
```

## Prepare

```sh
Run `npm install`
Run `bower install`
```

## Build & development
```sh
Run `grunt` for building and `grunt serve` for preview.
```
## Testing
```sh
Running `grunt test` will run the unit tests with karma.
```
