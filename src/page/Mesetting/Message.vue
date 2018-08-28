<template>
  <div>
    <Row>
      <Col span='3' class='message'>消息设置</Col>
      
      
    </Row>
     <hr style='margin:15px 0'>
   
    <div class='collapse'>
      <Collapse simple>
        <Panel :hide-arrow='true' name="1">
          <Row>
            <Col span='3' class='desctitle'> @我的
            </Col>
            <Col span='4' offset='4'>@我的相关设置</Col>
            <Col span='2' offset='11'>编辑</Col>
          </Row>
          <p slot="content">
            <Row>
              <Col class='desctitle' span='2'>
              <div>
                现昵称
              </div>
              <div>
                新昵称
              </div>
              </Col>

              <Col class='desc' span='22'>
              <div>hahaha</div>
              <div>
                <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
              </div>
              <p>用户你好，微博允许普通用户一年修改一次昵称，请谨慎提交，橙V、蓝V认证用户修改次数请见详细规则，查看详细规则>></p>
              <p>微博年费会员最多可修改5次/年，立即开通会员>></p>
              <p>系统为你推荐了几款好昵称，快去看看>></p>
              <ButtonGroup>
                <Button type="primary">保存</Button>
                <Button>取消</Button>
              </ButtonGroup>

              </Col>

            </Row>

          </p>

        </Panel>

      </Collapse>

    </div>
    <div class='collapse'>
      <Collapse simple>
        <Panel :hide-arrow='true' name="1">
          <Row>
            <Col span='3' class='desctitle'> 评论
            </Col>
            <Col span='4' offset='4'>评论我的相关设置</Col>
            <Col span='2' offset='11'>编辑</Col>
          </Row>
          <p slot="content">
            <Row>
              <Col class='desctitle' span='2'>
              <div>
                现昵称
              </div>
              <div>
                新昵称
              </div>
              </Col>

              <Col class='desc' span='22'>
              <div>hahaha</div>
              <div>
                <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
              </div>
              <p>用户你好，微博允许普通用户一年修改一次昵称，请谨慎提交，橙V、蓝V认证用户修改次数请见详细规则，查看详细规则>></p>
              <p>微博年费会员最多可修改5次/年，立即开通会员>></p>
              <p>系统为你推荐了几款好昵称，快去看看>></p>
              <ButtonGroup>
                <Button type="primary">保存</Button>
                <Button>取消</Button>
              </ButtonGroup>

              </Col>

            </Row>

          </p>

        </Panel>

      </Collapse>

    </div>
    <div class='collapse'>
      <Collapse simple>
        <Panel :hide-arrow='true' name="1">
          <Row>
            <Col span='3' class='desctitle'> 赞
            </Col>
            <Col span='4' offset='4'>赞的相关设置</Col>
            <Col span='2' offset='11'>编辑</Col>
          </Row>
          <p slot="content">
            <Row>
              <Col class='desctitle' span='2'>
              <div>
                现昵称
              </div>
              <div>
                新昵称
              </div>
              </Col>

              <Col class='desc' span='22'>
              <div>hahaha</div>
              <div>
                <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
              </div>
              <p>用户你好，微博允许普通用户一年修改一次昵称，请谨慎提交，橙V、蓝V认证用户修改次数请见详细规则，查看详细规则>></p>
              <p>微博年费会员最多可修改5次/年，立即开通会员>></p>
              <p>系统为你推荐了几款好昵称，快去看看>></p>
              <ButtonGroup>
                <Button type="primary">保存</Button>
                <Button>取消</Button>
              </ButtonGroup>

              </Col>

            </Row>

          </p>

        </Panel>

      </Collapse>

    </div>
    <div class='collapse'>
      <Collapse simple>
        <Panel :hide-arrow='true' name="1">
          <Row>
            <Col span='3' class='desctitle'> 私信
            </Col>
            <Col span='4' offset='4'>私信的相关设置</Col>
            <Col span='2' offset='11'>编辑</Col>
          </Row>
          <p slot="content">
            <Row>
              <Col class='desctitle' span='2'>
              <div>
                现昵称
              </div>
              <div>
                新昵称
              </div>
              </Col>

              <Col class='desc' span='22'>
              <div>hahaha</div>
              <div>
                <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
              </div>
              <p>用户你好，微博允许普通用户一年修改一次昵称，请谨慎提交，橙V、蓝V认证用户修改次数请见详细规则，查看详细规则>></p>
              <p>微博年费会员最多可修改5次/年，立即开通会员>></p>
              <p>系统为你推荐了几款好昵称，快去看看>></p>
              <ButtonGroup>
                <Button type="primary">保存</Button>
                <Button>取消</Button>
              </ButtonGroup>

              </Col>

            </Row>

          </p>

        </Panel>

      </Collapse>

    </div>
    <div class='collapse'>
      <Collapse simple>
        <Panel :hide-arrow='true' name="1">
          <Row>
            <Col span='3' class='desctitle'>未关注人私信
            </Col>
            <Col span='4' offset='4'>未关注人私信的设置</Col>
            <Col span='2' offset='11'>编辑</Col>
          </Row>
          <p slot="content">
            <Row>
              <Col class='desctitle' span='2'>
              <div>
                现昵称
              </div>
              <div>
                新昵称
              </div>
              </Col>

              <Col class='desc' span='22'>
              <div>hahaha</div>
              <div>
                <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
              </div>
              <p>用户你好，微博允许普通用户一年修改一次昵称，请谨慎提交，橙V、蓝V认证用户修改次数请见详细规则，查看详细规则>></p>
              <p>微博年费会员最多可修改5次/年，立即开通会员>></p>
              <p>系统为你推荐了几款好昵称，快去看看>></p>
              <ButtonGroup>
                <Button type="primary">保存</Button>
                <Button>取消</Button>
              </ButtonGroup>

              </Col>

            </Row>

          </p>

        </Panel>

      </Collapse>

    </div>
    <div class='collapse'>
      <Collapse simple>
        <Panel :hide-arrow='true' name="1">
          <Row>
            <Col span='3' class='desctitle'>收货地址
            </Col>
            <Col span='4' offset='4'>未填写地址</Col>
            <Col span='2' offset='11'>编辑</Col>
          </Row>
          <p slot="content">
            <Row>
              <Col class='desctitle' span='2'>
              <div>
                现昵称
              </div>
              <div>
                新昵称
              </div>
              </Col>

              <Col class='desc' span='22'>
              <div>hahaha</div>
              <div>
                <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
              </div>
              <p>用户你好，微博允许普通用户一年修改一次昵称，请谨慎提交，橙V、蓝V认证用户修改次数请见详细规则，查看详细规则>></p>
              <p>微博年费会员最多可修改5次/年，立即开通会员>></p>
              <p>系统为你推荐了几款好昵称，快去看看>></p>
              <ButtonGroup>
                <Button type="primary">保存</Button>
                <Button>取消</Button>
              </ButtonGroup>

              </Col>

            </Row>

          </p>

        </Panel>

      </Collapse>

    </div>
    <div class='collapse'>
      <Collapse simple>
        <Panel :hide-arrow='true' name="1">
          <Row>
            <Col span='3' class='desctitle'>新粉丝
            </Col>
            <Col span='4' offset='4'>新粉丝的相关设置</Col>
            <Col span='2' offset='11'>编辑</Col>
          </Row>
          <p slot="content">
            <Row>
              <Col class='desctitle' span='2'>
              <div>
                现昵称
              </div>
              <div>
                新昵称
              </div>
              </Col>

              <Col class='desc' span='22'>
              <div>hahaha</div>
              <div>
                <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
              </div>
              <p>用户你好，微博允许普通用户一年修改一次昵称，请谨慎提交，橙V、蓝V认证用户修改次数请见详细规则，查看详细规则>></p>
              <p>微博年费会员最多可修改5次/年，立即开通会员>></p>
              <p>系统为你推荐了几款好昵称，快去看看>></p>
              <ButtonGroup>
                <Button type="primary">保存</Button>
                <Button>取消</Button>
              </ButtonGroup>

              </Col>

            </Row>

          </p>

        </Panel>

      </Collapse>

    </div>
    <div class='collapse'>
      <Collapse simple>
        <Panel :hide-arrow='true' name="1">
          <Row>
            <Col span='3' class='desctitle'>好友圈
            </Col>
            <Col span='4' offset='4'>好友圈的相关设置</Col>
            <Col span='2' offset='11'>编辑</Col>
          </Row>
          <p slot="content">
            <!-- <div>我可以收到哪些人的@消息</div>
            <div> <Radio v-model="single">Radio</Radio></div> -->
            <Row>
              <!-- <Col class='desctitle' span='2'>
              <div>
                现昵称
              </div>
              <div>
                新昵称
              </div>
              </Col>

              <Col class='desc' span='22'>
              <div>hahaha</div>
              <div>
                <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
              </div>
              <p>用户你好，微博允许普通用户一年修改一次昵称，请谨慎提交，橙V、蓝V认证用户修改次数请见详细规则，查看详细规则>></p>
              <p>微博年费会员最多可修改5次/年，立即开通会员>></p>
              <p>系统为你推荐了几款好昵称，快去看看>></p>

              </Col> -->
              <div class='desc'>
               <div>我可以收到哪些人的@消息</div>
               <div> <Radio v-model="single">所有人</Radio></div>
               <div> <Radio v-model="single">我关注的人</Radio></div>
               
              <ButtonGroup>
                <Button type="primary">保存</Button>
                <Button>取消</Button>
              </ButtonGroup>

              </div>

            </Row>

             


          </p>

        </Panel>

      </Collapse>

    </div>

  </div>

</template>
<style scoped>
.collapse {
  margin-bottom: 10px;
}
.desctitle {
  font-weight: bold;
}
.desc > *,
.desctitle > * {
  margin: 10px 0;
}
</style>
