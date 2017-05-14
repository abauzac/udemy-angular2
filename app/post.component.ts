import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'post',
    template: `
        {{ post.title }}
        <br />
        {{ post.body | summary:10 }}
    `
})

export class PostComponent implements OnInit {

    post = {
        title: "Title post",
        body: `Culpa ipsum enim Lorem aute reprehenderit amet non.
         Excepteur eiusmod est nulla minim proident cillum 
         adipisicing cupidatat qui. Elit minim ipsum fugiat
          reprehenderit eu quis et voluptate mollit non proident
           aliqua exercitation non. Magna excepteur in aliquip
            exercitation magna sunt cillum ipsum voluptate. 
            Veniam nulla eiusmod nostrud fugiat veniam adipisicing
             labore enim. Incididunt eu duis ut laboris anim non
              Lorem ea fugiat excepteur veniam duis exercitation
               excepteur. Culpa sint eu laborum commodo officia.`
    }    

    constructor() { }

    ngOnInit() { }

}