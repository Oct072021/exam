<template>
    <div>
        <div class="score">
            <div class="score_num">{{ score }} 分！</div>
            <span class="score_tip">{{ scoreTips }}</span>
        </div>
        <div class="share"></div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "score",
        data() {
            return {
                showHide: false, //是否显示提示
                score: 0, //分数
                scoreTips: '', //分数提示
                rightAnswer: [2, 7, 12, 13, 18], //正确答案
                scoreTipsArr: ['你说，是不是把知识都还给小学老师了？', '还不错，但还需要继续加油哦！', '不要嘚瑟还有进步的空间！', '智商离爆表只差一步了！', '你也太聪明啦！'],
            }
        },
        computed: mapState(['answer_id']),
        created() {
            this.computedScore()
            this.getScoreTip()
            document.body.style.background = 'url(../../images/4-1.jpg) no-repeat'
            document.body.style.backgroundSize = "100% 100%"
        },
        methods: {
            //计算最终得分
            computedScore() {
                this.answer_id.forEach((item, index) => {
                    if (item == this.rightAnswer[index]) {
                        this.score = this.score + 20
                    }
                })
            },
            //对应的tips
            getScoreTip() {
                let index = Math.ceil(this.score / 20) - 1
                this.scoreTips = this.scoreTipsArr[index]
            },
        },
    }
</script>

<style lang="less">
  body {
    background: url(../../../public/images/4-1.jpg) no-repeat;
    background-size: 100% 100%;
  }

  .score {
    position: absolute;
    background: url(../../../public/images/4-2.png) no-repeat;
    background-size: 100% 100%;
    width: 14rem;
    height: 13rem;
    top: 2rem;
    left: 5.5rem;

    .score_num {
      font-family: Tahoma, Helvetica, Arial;
      font-size: 2rem;
      font-weight: 900;
      color: #a51d31;
      position: absolute;
      top: 7rem;
      width: 13rem;
      left: 1.5rem;
      text-align: center;
    }

    .score_tip {
      color: #3e2415;
      position: absolute;
      top: 10rem;
      left: 4rem;
    }
  }

  .share {
    width: 8rem;
    height: 4rem;
    background: url(../../../public/images/4-3.png) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 18rem;
    left: 9rem;
  }
</style>