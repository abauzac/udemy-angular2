import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'vote',
    template: `
    <div class="vote-wrapper">

        <i class="glyphicon glyphicon-menu-up" 
        [class.hasVoted]="myVote == 1"
        (click)="onClick(true)"></i>

        <span>{{ voteCounter }}</span>

        <i class="glyphicon glyphicon-menu-down"
        [class.hasVoted]="myVote == -1"
         (click)="onClick(false)"></i>

    </div>
    `,
    styles: [`
        .vote-wrapper{
            width: 20px;
            text-align: center;
        }

        .hasVoted{
            color: gold;
        }

        .glyphicon-menu-up, 
        .glyphicon-menu-down{
            cursor:pointer;
        }
    `]
})
export class VoteComponent implements OnInit {

    @Input() voteCounter = 0;
    @Input() myVote = 0;

    @Output() voteChange = new EventEmitter()

    constructor() { }

    ngOnInit() { }

    onClick(isUpVote) {
        if (this.myVote == 0) {
            this.voteChange.emit({ upVote: isUpVote })

            if (isUpVote) {
                this.myVote = 1
                this.voteCounter++
            } else {
                this.myVote = -1
                this.voteCounter--
            }
        }
    }

}