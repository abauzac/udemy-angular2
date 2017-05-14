import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'zippy',
    templateUrl: 'app/zippy.component.html',
    styles: [`
        .zip-wrapper{
            width:100%;
            margin: 20px;
        }
        .zip-header{
            width: 100%;
            padding: 10px;
            height: 40px;
            cursor:pointer;
        }
        .zip-header:hover{
            background: #ccc;
        }
        .zip-chevron{
            float : right;
        }

        .zip-title{
            float:left
        }
        .zip-body{
            padding: 10px;
        }
    `]
})

export class ZippyComponent  {

    @Input() title = "";    
    isExpanded = false;

    constructor() { }

    onClickExpand() {
        this.isExpanded = !this.isExpanded;
    }

}