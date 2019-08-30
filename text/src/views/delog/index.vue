<template>
    <div class="modal" v-if="isShow">
		<div class="main">
			<p class="msg">{{text.msg}}</p>
			<div class="btnBox">
				<span @click="close">{{text.btn.no}}</span>
				<span @click="ok">{{text.btn.ok}}</span>
			</div>
		</div>
	</div>
</template>
<script>

export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            isShow:true,
            text:{
                type:'',              
                msg:'',
                btn:{
                    ok:'',
                    no:''
                },
            }
        }
    },
    computed:{

    },
    methods:{
        close(){
            this.isShow=false;
        },
        ok(){
            this.isShow=false;
        },
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style >
.modal{
		position: absolute;
		width:100%;
		height:100%;
		background: rgba(0,0,0,0.5);
		top:0;
		left:0;
		z-index:99;
	}
	.main{
		position: absolute;
		width:80%;
		height:3.7rem;
		background-size:100% 100%;
		left:10%;
		top:50%;
		margin-top:-1.85rem;
		color:#fff;
		padding:0.72rem 1.03rem;
	}
	.msg{
		font-size:0.32rem;
		font-weight:500;
        color:rgba(48,197,171,1);
	}
	.btnBox{
		display: flex;
		justify-content: space-between;
		margin-top:0.88rem;
	}
	.btnBox span{
		display: inline-block;
		width:1.51rem;
		height:0.62rem;
		line-height: 0.62rem;

		background-size:100% 100%;
		font-weight:500;
	    color:rgba(48,197,171,1);
	    font-size:0.33rem;
	}
	.btnBox span:last-child{
	
		background-size:100% 100%;
		color:rgba(212,255,249,1);
	}

</style>