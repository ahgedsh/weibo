<template>
  <div>
    <Row>
      <Col span='3' class='message'>我的信息</Col>
      <Col span='7'>
      <Row>
        <Col span='7'> 资料完善度
        </Col>
        <Col span='17'>
        <Progress :percent="45" />
        </Col>
      </Row>
      </Col>
      <Col span='2' offset='12'>预览我的主页</Col>
    </Row>
     <hr style='margin:15px 0'>
    <div class='collapse'>
      <Collapse simple>
        <Panel :hide-arrow='true' name="1">
          <Row>
            <Col span='3' class='desctitle'> 登录名
            </Col>
            <Col span='4' offset='4'>18827863321</Col>
            <Col span='2' offset='11'>修改密码</Col>
          </Row>

        </Panel>

      </Collapse>

    </div>
    <div class='collapse'>
      <Collapse simple>
        <Panel :hide-arrow='true' name="1">
          <Row>
            <Col span='3' class='desctitle'> 手机号
            </Col>
            <Col span='4' offset='4'>18827863321</Col>
            <Col span='2' offset='11'>查看</Col>
          </Row>

        </Panel>

      </Collapse>

    </div>
    <div class='collapse'>
      <Collapse simple>
        <Panel :hide-arrow='true' name="1">
          <Row>
            <Col span='3' class='desctitle'> 昵称
            </Col>
            <Col span='4' offset='4'>hahahh</Col>
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
            <Col span='3' class='desctitle'> 个人资料
            </Col>
            <Col span='4' offset='4'>完善资料，让大家更了解你</Col>
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
            <Col span='3' class='desctitle'> 教育信息
            </Col>
            <Col span='4' offset='4'>未填写学校</Col>
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
            <Col span='3' class='desctitle'> 职业信息
            </Col>
            <Col span='4' offset='4'>未填写公司</Col>
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
            <Col span='3' class='desctitle'>个人标签
            </Col>
            <Col span='4' offset='4'>未填写标签</Col>
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
            <Col span='3' class='desctitle'>个性域名
            </Col>
            <Col span='4' offset='4'>设置个性化域名</Col>
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
