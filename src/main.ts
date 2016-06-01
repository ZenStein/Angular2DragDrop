import {bootstrap} from '@angular/platform-browser-dynamic';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser/src/platform_browser';
import { enableProdMode } from '@angular/core';
import {UidGenerator} from './app/uid-generator';
import {DragDropModelTemplate} from './app/drag-drop-model-template';
import { RoboRenG2AppComponent, environment } from './app/';
import {provide} from '@angular/core';
import {Renderer} from '@angular/core';
//
import {OVERLAY_CONTAINER_TOKEN} from '@angular2-material/core/overlay/overlay';
import {MdLiveAnnouncer} from '@angular2-material/core/live-announcer/live-announcer';
import {createOverlayContainer} from '@angular2-material/core/overlay/overlay-container';
import {MdGestureConfig} from '@angular2-material/core/gestures/MdGestureConfig';
import {MdIconRegistry} from '@angular2-material/icon/icon-registry';







if (environment.production) {
enableProdMode();
}



bootstrap(RoboRenG2AppComponent, [
    [DragDropModelTemplate],
    [UidGenerator],
    [HTTP_PROVIDERS],
   
    
    ROUTER_PROVIDERS,

    
    MdLiveAnnouncer,
    provide(OVERLAY_CONTAINER_TOKEN, {useValue: createOverlayContainer()}),
    MdIconRegistry,
    provide(HAMMER_GESTURE_CONFIG, {useClass: MdGestureConfig})
])
//bootstrap(RoboRenG2AppComponent, [[DragDropModelTemplate],[UidGenerator], [HTTP_PROVIDERS]

//import { bootstrap } from '@angular/platform-browser-dynamic';
//import { enableProdMode } from '@angular/core';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';
//import {HTTP_PROVIDERS} from '@angular/http';

//import {UidGenerator} from './app/uid-generator';
//import {DragDropModelTemplate} from './app/drag-drop-model-template';
//import { RoboRenG2AppComponent, environment } from './app/';

//if (environment.production) {
//  enableProdMode();
//}

//bootstrap(RoboRenG2AppComponent, [[DragDropModelTemplate],[UidGenerator], [HTTP_PROVIDERS]
