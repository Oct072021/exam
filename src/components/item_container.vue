<template>
    <div>
        <div class="top_logo">
            <span class="top_tip" v-if="fatherComponent == 'home'">{{ level }}</span>
            <span class="top_tip" v-if="fatherComponent == 'item'">题目{{ itemNum }}</span>
        </div>
        <div v-if="fatherComponent == 'home'">
            <div class="home"></div>
            <router-link to="item" class="start_button"></router-link>
        </div>
        <div v-if="fatherComponent == 'item'">
            <div class="item_background">
                <div class="item">
                    <header class="item_title">{{ itemDetail[itemNum - 1].topic_name }}</header>
                    <ul>
                        <li v-for="(value , key) in itemDetail[itemNum - 1].topic_answer" class="item_list"
                            @click="choose(key , value.topic_answer_id)">
                            <span class="option" :class="{'chosen':chosen_num == key}">{{ chooseType(key) }}</span>
                            <span class="option_content">{{ value.answer_name }}</span>
                        </li>
                    </ul>
                    <span class="next_button" @click="nextItem" v-if="itemNum<itemDetail.length"></span>
                    <span class="submit_button" v-else @click="submitAnswer"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";

    export default {
        name: 'item_container',
        data() {
            return {
                item_id: null, //题目ID
                chosen_num: null, //选中答案索引
                chosen_id: null //选中答案id
            }
        },
        props: ['fatherComponent'],
        computed: mapState([
            'itemNum', //第几题
            'level', //第几周
            'itemDetail', //题目详情
            'timer', //计时器
        ]),
        methods: {
            ...mapActions([
                'addNum', 'initializeData',
            ]),
            //点击下一题
            nextItem() {
                if (this.chosen_num !== null) {
                    this.addNum(this.chosen_id)
                    this.chosen_num = null
                } else {
                    alert("请先选择答案！")
                }
            },
            //索引0-3对应答案A-D
            chooseType: type => {
                switch (type) {
                    case 0:
                        return 'A'
                    case 1:
                        return 'B'
                    case 2:
                        return 'C'
                    case 3:
                        return 'D'
                }
            },
            //选中的答案信息
            choose(type, id) {
                this.chosen_num = type
                this.chosen_id = id
            },
            //
            submitAnswer() {
                if (this.chosen_num !== null) {
                    this.addNum(this.chosen_id)
                    clearInterval(this.timer)
                    this.$router.push('score')
                } else {
                    alert("请先选择答案！")
                }
            }
        },
        created() {
            //初始化信息
            if (this.fatherComponent == 'home') {
                this.initializeData();
                document.body.style.background = 'url(../images/1-1.jpg) no-repeat'
                document.body.style.backgroundSize = '100% 100%'
            }
        }
    }

</script>

<style lang="less">
  .top_logo {
    position: absolute;
    background: url(../../public/images/WechatIMG2.png) no-repeat;
    background-size: 100% 100%;
    height: 10rem;
    width: 5rem;
    top: -1.3rem;
    right: 1.8rem;

    .top_tip {
      position: absolute;
      top: 7.5rem;
      left: 1.4rem;
      height: 1rem;
      width: 2.5rem;
      font-size: 0.8rem;
      font-family: '黑体';
      font-weight: 600;
      color: #a57c50;
      text-align: center;
    }
  }

  .home {
    position: absolute;
    background: url(../../public/images/1-2.png) no-repeat;
    background-size: 100% 100%;
    height: 19rem;
    width: 21rem;
    top: 7rem;
    left: 2.3rem;
  }

  .start_button {
    position: absolute;
    background: url(../../public/images/1-4.png) no-repeat;
    background-size: 100% 100%;
    height: 3.5rem;
    width: 6rem;
    top: 25rem;
    left: 9.5rem;
  }

  .item_background {
    position: absolute;
    background: url(../../public/images/2-1.png) no-repeat;
    background-size: 100% 100%;
    height: 19rem;
    width: 21rem;
    top: 7rem;
    left: 2.3rem;

    .item {
      position: absolute;
      top: 2.8rem;
      left: 4.2rem;
      width: 12rem;
      height: 12rem;

      .item_title {
        color: #E9EEF3;
      }

      .item_list {
        width: 10rem;

        .option {
          display: inline-block;
          color: #E9EEF3;
          font-size: 0.8rem;
          font-family: 'Arial';
          height: 1.3rem;
          width: 1.3rem;
          border: 1px solid #fff;
          border-radius: 50%;
          line-height: 1rem;
          text-align: center;
          margin: 0.9rem 0.5rem 0 0;
        }

        .option_content {
          display: inline-block;
          font-size: 0.9rem;
          color: #E9EEF3;
          width: 7.5rem;
          height: 1.3rem;
        }

        .chosen {
          background-color: #ffd400;
          color: #575757;
          border-color: #ffd400;
        }
      }

      .next_button {
        position: absolute;
        background: url(../../public/images/2-2.png) no-repeat;
        background-size: 100% 100%;
        height: 3.5rem;
        width: 6rem;
        top: 16rem;
        left: 2.8rem;
      }

      .submit_button {
        position: absolute;
        background: url(../../public/images/3-1.png) no-repeat;
        background-size: 100% 100%;
        height: 3.5rem;
        width: 6rem;
        top: 16rem;
        left: 2.8rem;
      }
    }
  }
</style>