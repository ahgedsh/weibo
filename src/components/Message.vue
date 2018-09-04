<template>
  <div>
    <div class='botton'>
      <div class='mail'>
      <Icon size='30' type="ios-mail" />
      私信聊天

      </div>
      <div class='chat'>
        <div class='header'>王花花</div>
        <Row>
          <Col span='5'>
          <div class='name'>王花花</div>
          <div class='name active'>螺丝刀</div>
          <div class='name'>李冰冰</div>
          
          </Col>
          <Col span='19'>
          <div class='message-list'>
          <div class=' form'><span class='item' >yo</span></div>
          <div class=' to'><span class='item' >yo</span></div>
          <div class=' form'><span class='item' >yo</span></div>
          <div class=' to'><span  class='item'>yo</span></div>

          </div>
          </Col>
        </Row>
      </div>
     
    </div>
  </div>
</template>

<style scoped>
.header{
  background:#777;
  padding:10px 0;
}

.mail{
 padding:10px 70px;
 display:none;
  

 
}
.chat,
.mail{
  background:#fff;
  position: fixed;
   right:10px;
 bottom:20px;

}

.mail >*{
  padding:15px 0;
}
.chat>* .name{
  padding:5px ;
  margin:5px 0;

  background:rgb(201, 200, 200);
}
.name.active{
  background:#777;
}

.chat{
width: 300px;
height:500px;
}

.message-list>*{
  overflow: auto;
  margin:10px;
  
}
.item{
  display: inline-block;
  border-radius: 3px;
 
}

.form{
 
  text-align: right;
}
.form .item{
  padding:10px;
  background:lawngreen;
}
.to .item{
 background:#eee;
 padding:10px;
  text-align: left;
}
</style>

