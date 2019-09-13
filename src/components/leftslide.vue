<template>
    <div class="leftslide">
        <ul>
            <li><img src="../assets/note.svg" width="24px"/><span>筆記</span></li>
            <li><img src="../assets/hashtag.svg" width="24px" height="22px"/><span>標籤</span></li>
            <li><img src="../assets/star.svg" width="24px" /><span>星號</span></li>
            <li><img src="../assets/delete.svg" width="24px" /><span>刪除</span></li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.leftslide{
    width: 100%;
    display: flex;
    justify-content: flex-start;
}
.leftslide ul{
    list-style: none;
     margin: 0;
     padding: 0;
     padding-left: 15%;
}
.leftslide li{
    padding-top: 50%;
}
.leftslide img{
    vertical-align: middle;
}
</style>