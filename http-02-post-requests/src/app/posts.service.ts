import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({providedIn: "root"})
export class PostService {


    constructor(private http: HttpClient){}

    createAndStorePost(title: string, content: string){
        const postData: Post = {title: title, content: content}
        this.http.post(
            'https://learning-angular-e5d76.firebaseio.com/post.json', 
            postData
            ).subscribe(responseData => {
              console.log(responseData);
            });
    }

    fetchPost(){
        return  this.http.get<{[key: string]: Post}>('https://learning-angular-e5d76.firebaseio.com/post.json', 
        {
            headers: new HttpHeaders({'custom-header': 'Hello'}),
            params: new HttpParams().set('print','pretty')
        })
        .pipe(map(responseData => {

        const postArray: Post[] = [];
        for(const key in responseData){
            if(responseData.hasOwnProperty(key)){
            postArray.push({...responseData[key], id: key});
            }
        }
        return postArray;

        }));
    }

    deletePosts(){
        return this.http.delete('https://learning-angular-e5d76.firebaseio.com/post.json');
    }
}