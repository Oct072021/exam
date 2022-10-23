import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'

export default new Vuex.Store({
    state: {
        level: '第一周', //活动周数
        itemNum: 1, // 第几题
        allTime: 0,  //总共用时
        timer: '', //定时器
        itemDetail: [{
            "topic_id": 20,
            "active_topic_id": 4,
            "type": "ONE",
            "topic_name": "题目一:" + "\n" + "1+1=",
            "active_id": 1,
            "active_title": "exam",
            "active_topic_phase": "第一周",
            "active_start_time": "1479139200",
            "active_end_time": "1482163200",
            "topic_answer": [{
                "topic_answer_id": 1,
                "topic_id": 20,
                "answer_name": "1",
            }, {
                "topic_answer_id": 2,
                "topic_id": 20,
                "answer_name": "2",
            }, {
                "topic_answer_id": 3,
                "topic_id": 20,
                "answer_name": "3",
            }, {
                "topic_answer_id": 4,
                "topic_id": 20,
                "answer_name": "4",
            }]
        }, {
            "topic_id": 21,
            "active_topic_id": 4,
            "type": "MORE",
            "topic_name": "题目二:" + "\n" + "2+2=",
            "active_id": 1,
            "active_title": "欢乐星期五标题",
            "active_topic_phase": "第一周",
            "active_start_time": "1479139200",
            "active_end_time": "1482163200",
            "topic_answer": [{
                "topic_answer_id": 5,
                "topic_id": 21,
                "answer_name": "1",
            }, {
                "topic_answer_id": 6,
                "topic_id": 21,
                "answer_name": "3",
            }, {
                "topic_answer_id": 7,
                "topic_id": 21,
                "answer_name": "4",
            }, {
                "topic_answer_id": 8,
                "topic_id": 21,
                "answer_name": "7",
            }]
        }, {
            "topic_id": 21,
            "active_topic_id": 4,
            "type": "MORE",
            "topic_name": "题目三" + "\n" + "3+3=",
            "active_id": 1,
            "active_title": "欢乐星期五标题",
            "active_topic_phase": "第一周",
            "active_start_time": "1479139200",
            "active_end_time": "1482163200",
            "topic_answer": [{
                "topic_answer_id": 9,
                "topic_id": 21,
                "answer_name": "7",
            }, {
                "topic_answer_id": 10,
                "topic_id": 21,
                "answer_name": "9",
            }, {
                "topic_answer_id": 11,
                "topic_id": 21,
                "answer_name": "3",
            }, {
                "topic_answer_id": 12,
                "topic_id": 21,
                "answer_name": "6",
            }]
        }, {
            "topic_id": 21,
            "active_topic_id": 4,
            "type": "MORE",
            "topic_name": "题目四" + "\n" + "4+4=",
            "active_id": 1,
            "active_title": "欢乐星期五标题",
            "active_topic_phase": "第一周",
            "active_start_time": "1479139200",
            "active_end_time": "1482163200",
            "topic_answer": [{
                "topic_answer_id": 13,
                "topic_id": 21,
                "answer_name": "8",
            }, {
                "topic_answer_id": 14,
                "topic_id": 21,
                "answer_name": "4",
            }, {
                "topic_answer_id": 15,
                "topic_id": 21,
                "answer_name": "9",
            }, {
                "topic_answer_id": 16,
                "topic_id": 21,
                "answer_name": "6",
            }]
        }, {
            "topic_id": 21,
            "active_topic_id": 4,
            "type": "MORE",
            "topic_name": "题目五" + "\n" + "5+5=",
            "active_id": 1,
            "active_title": "欢乐星期五标题",
            "active_topic_phase": "第一周",
            "active_start_time": "1479139200",
            "active_end_time": "1482163200",
            "topic_answer": [{
                "topic_answer_id": 17,
                "topic_id": 21,
                "answer_name": "5",
            }, {
                "topic_answer_id": 18,
                "topic_id": 21,
                "answer_name": "10",
            }, {
                "topic_answer_id": 19,
                "topic_id": 21,
                "answer_name": "15",
            }, {
                "topic_answer_id": 20,
                "topic_id": 21,
                "answer_name": "6",
            }]
        }],
        answer_id: [], //答案id
    },
    getters: {},
    mutations: {
        //点击进入下一题
        [ADD_ITEMNUM](state, num) {
            state.itemNum += num;
        },
        //记录答案
        [REMBER_ANSWER](state, id) {
            state.answer_id.push(id);
        },
        /*
        记录做题时间
         */
        [REMBER_TIME](state) {
            state.timer = setInterval(() => {
                state.allTime++;
            }, 1000)
        },
        /*
        初始化信息，
         */
        [INITIALIZE_DATA](state) {
            state.itemNum = 1;
            state.allTime = 0;
            state.answer_id = [];
        },
    },
    actions: {
        addNum({commit, state}, id) {
            //点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
            commit('REMBER_ANSWER', id);
            if (state.itemNum < state.itemDetail.length) {
                commit('ADD_ITEMNUM', 1);
            }
        },
        //初始化信息
        initializeData({commit}) {
            commit('INITIALIZE_DATA');
        }
    },
    modules: {}
})
