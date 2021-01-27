import { observable, computed, action } from "mobx";
import http from '../http'
class AppStore {
    @observable tab = 'all';//首页分类标签，默认all
    @observable page = 1;//首页分页页数，默认1
    @observable list = [{title:'loading'}];//首页列表
    @observable detile = {title:'loading'};//文章详情
    @observable articleId = '';//文章id
    @action getIndexMessage(url){
        //获取首页列表
        this.list =  [{title:'loading'}]
        http.get(url,
        {
        //get参数传递
          params:{
          tab:this.tab,
          page:this.page,
      }
    }
        ).then(response => {  
                this.list = response.data   
        })
    }
    @action getArticleDetile(url){
        //获取文章详情
        this.detile = {title:'loading'}
        http.get(url).then(response => {  
            this.detile = response.data   
        })
    }
    
}
export default new AppStore();

