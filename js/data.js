/* ============================================
   HSK Bài 12 · DATA
   Dữ liệu bài học (từ vựng, hội thoại, quiz...)
   ============================================ */

// Danh sách từ vựng (24 từ)
const vocabData = [
  // Bài 1
  {n:1,zh:'天气',py:'tiānqì',pos:'Danh từ',vn:'thời tiết',em:'🌤️',lesson:1,
   ex_zh:'今天天气怎么样？',ex_py:'Jīntiān tiānqì zěnmeyàng?',ex_vn:'Hôm nay thời tiết thế nào?'},
  {n:2,zh:'这里',py:'zhèlǐ',pos:'Đại từ',vn:'ở đây, nơi này',em:'📍',lesson:1,
   ex_zh:'这里的天气不太好。',ex_py:'Zhèlǐ de tiānqì bú tài hǎo.',ex_vn:'Thời tiết ở đây không tốt lắm.'},
  {n:3,zh:'天',py:'tiān',pos:'Danh từ',vn:'trời; ngày',em:'☀️',lesson:1,
   ex_zh:'今天天儿很好。',ex_py:'Jīntiān tiānr hěn hǎo.',ex_vn:'Hôm nay trời rất đẹp.'},
  {n:4,zh:'下雨',py:'xià yǔ',pos:'Động từ',vn:'mưa (trời mưa)',em:'🌧️',lesson:1,
   ex_zh:'这里下雨了。',ex_py:'Zhèlǐ xià yǔ le.',ex_vn:'Ở đây mưa rồi.'},
  {n:5,zh:'了',py:'le',pos:'Trợ từ',vn:'(chỉ thay đổi/tình huống mới)',em:'✅',lesson:1,
   ex_zh:'他去学校了。',ex_py:'Tā qù xuéxiào le.',ex_vn:'Anh ấy đi học rồi.'},
  {n:6,zh:'雨',py:'yǔ',pos:'Danh từ',vn:'mưa',em:'🌂',lesson:1,
   ex_zh:'今天有雨。',ex_py:'Jīntiān yǒu yǔ.',ex_vn:'Hôm nay có mưa.'},
  {n:7,zh:'有点儿',py:'yǒudiǎnr',pos:'Phó từ',vn:'hơi, một chút (thường mang nghĩa tiêu cực)',em:'🌡️',lesson:1,
   ex_zh:'今天有点儿冷。',ex_py:'Jīntiān yǒudiǎnr lěng.',ex_vn:'Hôm nay hơi lạnh.'},
  {n:8,zh:'觉得',py:'juéde',pos:'Động từ',vn:'cảm thấy, cho rằng',em:'💭',lesson:1,
   ex_zh:'我觉得这个菜很好吃。',ex_py:'Wǒ juéde zhège cài hěn hǎochī.',ex_vn:'Tôi cảm thấy món này rất ngon.'},
  {n:9,zh:'冷',py:'lěng',pos:'Tính từ',vn:'lạnh',em:'🥶',lesson:1,
   ex_zh:'今天太冷了。',ex_py:'Jīntiān tài lěng le.',ex_vn:'Hôm nay lạnh quá.'},
  // Bài 2
  {n:10,zh:'下',py:'xià',pos:'Động từ',vn:'(mưa/tuyết) rơi, xuống',em:'⬇️',lesson:2,
   ex_zh:'外面下雪了。',ex_py:'Wàimiàn xià xuě le.',ex_vn:'Ngoài trời tuyết rơi rồi.'},
  {n:11,zh:'雪',py:'xuě',pos:'Danh từ',vn:'tuyết',em:'❄️',lesson:2,
   ex_zh:'昨天下雪了。',ex_py:'Zuótiān xià xuě le.',ex_vn:'Hôm qua tuyết rơi rồi.'},
  {n:12,zh:'来',py:'lái',pos:'Động từ',vn:'đến, tới',em:'🚶',lesson:2,
   ex_zh:'他明天来。',ex_py:'Tā míngtiān lái.',ex_vn:'Anh ấy ngày mai đến.'},
  {n:13,zh:'公司',py:'gōngsī',pos:'Danh từ',vn:'công ty',em:'🏢',lesson:2,
   ex_zh:'爸爸去公司了。',ex_py:'Bàba qù gōngsī le.',ex_vn:'Bố đi công ty rồi.'},
  {n:14,zh:'生病',py:'shēngbìng',pos:'Động từ',vn:'bị ốm, bệnh',em:'🤒',lesson:2,
   ex_zh:'他生病了，没来上课。',ex_py:'Tā shēngbìng le, méi lái shàngkè.',ex_vn:'Anh ấy bị ốm rồi, không đến lớp.'},
  {n:15,zh:'看病',py:'kànbìng',pos:'Động từ',vn:'khám bệnh (bệnh nhân đi khám)',em:'👨‍⚕️',lesson:2,
   ex_zh:'他生病了，要去看病。',ex_py:'Tā shēngbìng le, yào qù kànbìng.',ex_vn:'Anh ấy ốm rồi, phải đi khám bệnh.'},
  // Bài 3
  {n:16,zh:'病',py:'bìng',pos:'Động từ',vn:'bị bệnh, ốm',em:'😷',lesson:3,
   ex_zh:'我病了一个星期。',ex_py:'Wǒ bìng le yí gè xīngqī.',ex_vn:'Tôi bị bệnh một tuần.'},
  {n:17,zh:'一点儿',py:'yìdiǎnr',pos:'Số lượng từ',vn:'một chút, một ít',em:'🤏',lesson:3,
   ex_zh:'便宜一点儿吧！',ex_py:'Piányí yìdiǎnr ba!',ex_vn:'Rẻ hơn một chút đi!'},
  {n:18,zh:'药',py:'yào',pos:'Danh từ',vn:'thuốc',em:'💊',lesson:3,
   ex_zh:'你吃药了吗？',ex_py:'Nǐ chī yào le ma?',ex_vn:'Bạn uống thuốc chưa?'},
  {n:19,zh:'天',py:'tiān',pos:'Lượng từ',vn:'ngày (đơn vị thời gian)',em:'📅',lesson:3,
   ex_zh:'好好学习，天天向上。',ex_py:'Hǎohǎo xuéxí, tiāntiān xiàngshàng.',ex_vn:'Học hành chăm chỉ, ngày càng tiến bộ.'},
  {n:20,zh:'回',py:'huí',pos:'Động từ',vn:'về, trở về',em:'🏠',lesson:3,
   ex_zh:'我六点回家。',ex_py:'Wǒ liù diǎn huí jiā.',ex_vn:'Tôi về nhà lúc 6 giờ.'},
  {n:21,zh:'再',py:'zài',pos:'Phó từ',vn:'lại, sau đó mới',em:'🔄',lesson:3,
   ex_zh:'我明天再来。',ex_py:'Wǒ míngtiān zài lái.',ex_vn:'Ngày mai tôi lại đến.'},
  {n:22,zh:'喝',py:'hē',pos:'Động từ',vn:'uống',em:'🍵',lesson:3,
   ex_zh:'你想喝什么？',ex_py:'Nǐ xiǎng hē shénme?',ex_vn:'Bạn muốn uống gì?'},
  {n:23,zh:'热',py:'rè',pos:'Tính từ',vn:'nóng, ấm',em:'🔥',lesson:3,
   ex_zh:'今天有点儿热。',ex_py:'Jīntiān yǒudiǎnr rè.',ex_vn:'Hôm nay hơi nóng.'},
  {n:24,zh:'水',py:'shuǐ',pos:'Danh từ',vn:'nước',em:'💧',lesson:3,
   ex_zh:'多喝热水。',ex_py:'Duō hē rè shuǐ.',ex_vn:'Uống nhiều nước ấm.'},
];

// Dữ liệu phần khởi động (warmup)
const wuData = [
  {img:'🌧️',label:'下雨',py:'xià yǔ',letter:'A',ans:'A'},
  {img:'🥶',label:'冷',py:'lěng',letter:'B',ans:'B'},
  {img:'🤒',label:'生病',py:'shēng bìng',letter:'C',ans:'C'},
  {img:'👨‍⚕️',label:'看病',py:'kàn bìng',letter:'D',ans:'D'},
  {img:'❄️',label:'雪',py:'xuě',letter:'E',ans:'E'},
  {img:'💧',label:'水',py:'shuǐ',letter:'F',ans:'F'},
];

// Dữ liệu hội thoại (3 đoạn)
const dialogData = [
  {
    scene:'在电话里 · Qua điện thoại',
    chars:['王一雪','王一飞'],
    lines:[
      {sp:0,zh:'今天天气怎么样？',py:'Jīntiān tiānqì zěnmeyàng?',vn:'Hôm nay thời tiết thế nào?'},
      {sp:1,zh:'这里的天气不太好，下雨了。',py:'Zhèlǐ de tiānqì bú tài hǎo, xià yǔ le.',vn:'Thời tiết ở đây không tốt lắm, mưa rồi.'},
      {sp:0,zh:'雨大吗？',py:'Yǔ dà ma?',vn:'Mưa to không?'},
      {sp:1,zh:'有点儿大，我觉得很冷。',py:'Yǒudiǎnr dà, wǒ juéde hěn lěng.',vn:'Hơi to, tôi cảm thấy rất lạnh.'},
    ]
  },
  {
    scene:'在公司 · Ở công ty',
    chars:['王一雪','杨同乐'],
    lines:[
      {sp:0,zh:'昨天下雪了。',py:'Zuótiān xià xuě le.',vn:'Hôm qua tuyết rơi rồi.'},
      {sp:1,zh:'是的，太冷了。',py:'Shì de, tài lěng le.',vn:'Đúng vậy, lạnh quá.'},
      {sp:0,zh:'你昨天没来公司，生病了？',py:'Nǐ zuótiān méi lái gōngsī, shēngbìng le?',vn:'Hôm qua anh không đến công ty, bị ốm à?'},
      {sp:1,zh:'对，我昨天去医院看病了。',py:'Duì, wǒ zuótiān qù yīyuàn kànbìng le.',vn:'Đúng, hôm qua tôi đi bệnh viện khám bệnh rồi.'},
    ]
  },
  {
    scene:'在医院 · Ở bệnh viện',
    chars:['杨同乐','胡医生'],
    lines:[
      {sp:0,zh:'医生，我病了。',py:'Yīshēng, wǒ bìng le.',vn:'Bác sĩ, tôi bị bệnh rồi.'},
      {sp:1,zh:'我看看，你觉得怎么样？',py:'Wǒ kànkan, nǐ juéde zěnmeyàng?',vn:'Để tôi xem nào, bạn cảm thấy thế nào?'},
      {sp:0,zh:'我很冷。',py:'Wǒ hěn lěng.',vn:'Tôi rất lạnh.'},
      {sp:1,zh:'好的，吃一点儿药，今天休息半天吧。',py:'Hǎo de, chī yìdiǎnr yào, jīntiān xiūxi bàntiān ba.',vn:'Được rồi, uống một chút thuốc, hôm nay nghỉ nửa ngày nhé.'},
      {sp:0,zh:'好的。',py:'Hǎo de.',vn:'Được ạ.'},
      {sp:1,zh:'回家后再喝些热水。',py:'Huí jiā hòu zài hē xiē rè shuǐ.',vn:'Về nhà xong nhớ uống thêm nước ấm nhé.'},
    ]
  },
];

// Dữ liệu bài tập điền từ (fill in the blank)
const fillData = [
  {pre:'外边正在下',blank:'雪',post:'，太冷了。',hint:'(loại kết tủa từ bầu trời)',ans:'雪',exp:'雪 = tuyết; 下雪 = tuyết rơi'},
  {pre:'这里的天气不太好，下雨',blank:'了',post:'。',hint:'(trợ từ chỉ thay đổi)',ans:'了',exp:'了 ở cuối câu chỉ tình huống mới xuất hiện'},
  {pre:'今天',blank:'有点儿',post:'冷，我觉得很不舒服。',hint:'(hơi, một chút)',ans:'有点儿',exp:'有点儿 + tính từ = hơi... (thường hàm ý tiêu cực)'},
  {pre:'他',blank:'生病',post:'了，没来上课。',hint:'(bị bệnh)',ans:'生病',exp:'生病了 = bị ốm rồi'},
  {pre:'他昨天去医院',blank:'看病',post:'了。',hint:'(đi khám bác sĩ)',ans:'看病',exp:'看病 = đi khám bệnh (bệnh nhân đi khám)'},
  {pre:'昨天下雪了，',blank:'太',post:'冷了！',hint:'(cấu trúc cảm thán mức độ cao)',ans:'太',exp:'太...了 = ...quá! Diễn đạt mức độ rất cao'},
  {pre:'回家后',blank:'再',post:'喝些热水。',hint:'(sau đó mới / lại)',ans:'再',exp:'再 = sau đó mới, thêm lần nữa'},
  {pre:'医生，吃',blank:'一点儿',post:'药，今天休息半天吧。',hint:'(một ít / một chút - số lượng)',ans:'一点儿',exp:'一点儿 sau động từ chỉ số lượng nhỏ'},
  {pre:'弟弟起床了',blank:'吗',post:'？没起床呢。',hint:'(câu nghi vấn với了)',ans:'吗',exp:'VP + 了 + 吗 = câu hỏi với 了'},
  {pre:'今天有点儿',blank:'热',post:'，我想喝水。',hint:'(trái nghĩa với 冷)',ans:'热',exp:'热 = nóng/ấm, trái nghĩa với 冷 (lạnh)'},
];

// Dữ liệu bài tập sắp xếp câu (sort)
const sortData = [
  {words:['昨天','下雪','了'],ans:'昨天下雪了',vn:'Hôm qua tuyết rơi rồi.'},
  {words:['我','觉得','很','冷'],ans:'我觉得很冷',vn:'Tôi cảm thấy rất lạnh.'},
  {words:['他','生病了','没来','上课'],ans:'他生病了没来上课',vn:'Anh ấy bị ốm nên không đến lớp.'},
  {words:['回家后','再','喝些','热水'],ans:'回家后再喝些热水',vn:'Về nhà xong uống thêm nước ấm.'},
  {words:['今天','有点儿','冷'],ans:'今天有点儿冷',vn:'Hôm nay hơi lạnh.'},
  {words:['吃','一点儿','药','吧'],ans:'吃一点儿药吧',vn:'Uống một chút thuốc nhé.'},
  {words:['这里','的','天气','不太好'],ans:'这里的天气不太好',vn:'Thời tiết ở đây không tốt lắm.'},
  {words:['太','冷','了'],ans:'太冷了',vn:'Lạnh quá!'},
];

// Dữ liệu bài tập nối câu (match)
const matchData = [
  {left:'昨天下雪了，',right:'太冷了。',ri:0},
  {left:'他生病了，',right:'没来上课。',ri:1},
  {left:'回家后',right:'再喝些热水。',ri:2},
  {left:'你昨天没来公司，',right:'生病了？',ri:3},
  {left:'吃一点儿药，',right:'今天休息半天吧。',ri:4},
  {left:'下雨了，',right:'我觉得很冷。',ri:5},
];

// Dữ liệu trắc nghiệm (multiple choice)
const mcData = [
  {q:'昨天___雪了。（Hôm qua tuyết rơi rồi）',opts:['上','下','来','去'],ans:1},
  {q:'今天有点儿___。（Hôm nay hơi lạnh）',opts:['热','好','冷','大'],ans:2},
  {q:'"没来上课"是___的否定形式。（Phủ định của 来上课了）',opts:['不来上课了','没来上课了','不来上课','没来上课'],ans:3},
  {q:'弟弟起床___吗？（Em có thức dậy chưa?）',opts:['没','了','的','着'],ans:1},
  {q:'太___了！（Ngon quá!）',opts:['好吃','吃好','好不好','怎么样'],ans:0},
  {q:'___一点儿药，今天休息半天吧。（Uống một chút thuốc nhé）',opts:['喝','吃','拿','用'],ans:1},
  {q:'她___病了，要去看病。（Cô ấy bị bệnh rồi）',opts:['上','去','生','来'],ans:2},
  {q:'回家后___喝些热水。（Về nhà xong uống thêm nước ấm）',opts:['还','再','又','也'],ans:1},
  {q:'"有点儿冷" và "一点儿冷" — câu nào ĐÚNG?',opts:['有点儿冷','一点儿冷','两个都对','两个都错'],ans:0},
  {q:'这里的天气___好。（Thời tiết ở đây không tốt lắm）',opts:['很不','不太','太不','没有'],ans:1},
  {q:'今天___冷了！（Lạnh quá hôm nay!）',opts:['有点儿','很','太','一点儿'],ans:2},
  {q:'杨同乐昨天去___看病了。',opts:['公司','学校','医院','家里'],ans:2},
];

// Dữ liệu luyện hội thoại (conversation practice)
const convoData = [
  {
    title:'Hội thoại 1: Hỏi thăm thời tiết',
    pairs:[
      {q:'今天天气怎么样？',q_py:'Jīntiān tiānqì zěnmeyàng?',q_vn:'Hôm nay thời tiết thế nào?',
       a:'这里的天气不太好，下雨了。',a_py:'Zhèlǐ de tiānqì bú tài hǎo, xià yǔ le.',a_vn:'Thời tiết ở đây không tốt lắm, mưa rồi.'},
      {q:'雨大吗？',q_py:'Yǔ dà ma?',q_vn:'Mưa to không?',
       a:'有点儿大，我觉得很冷。',a_py:'Yǒudiǎnr dà, wǒ juéde hěn lěng.',a_vn:'Hơi to, tôi cảm thấy rất lạnh.'},
    ]
  },
  {
    title:'Hội thoại 3: Khám bệnh',
    pairs:[
      {q:'医生，我病了。',q_py:'Yīshēng, wǒ bìng le.',q_vn:'Bác sĩ, tôi bị bệnh rồi.',
       a:'我看看，你觉得怎么样？',a_py:'Wǒ kànkan, nǐ juéde zěnmeyàng?',a_vn:'Để tôi xem nào, bạn cảm thấy thế nào?'},
      {q:'我很冷。',q_py:'Wǒ hěn lěng.',q_vn:'Tôi rất lạnh.',
       a:'好的，吃一点儿药，今天休息半天吧。',a_py:'Hǎo de, chī yìdiǎnr yào, jīntiān xiūxi bàntiān ba.',a_vn:'Được rồi, uống một chút thuốc, hôm nay nghỉ nửa ngày nhé.'},
      {q:'好的。',q_py:'Hǎo de.',q_vn:'Được ạ.',
       a:'回家后再喝些热水。',a_py:'Huí jiā hòu zài hē xiē rè shuǐ.',a_vn:'Về nhà xong nhớ uống thêm nước ấm nhé.'},
    ]
  },
];

// Dữ liệu ngữ pháp (3 điểm)
const grammarData = [
  {
    "num": 1,
    "title": "Câu phi chủ-vị",
    "titleZh": "非主谓句",
    "sub": "Câu chỉ gồm từ hoặc cụm từ, không phân biệt chủ ngữ và vị ngữ. Thường dùng trong lời nói hàng ngày.",
    "rules": [
      "Các câu phi chủ-vị ngắn gọn, súc tích, thường dùng để miêu tả hiện tượng, cảm thán hoặc lời chào xã giao."
    ],
    "formula": [],
    "table": {
      "columns": [
        "Câu tiếng Trung",
        "Phiên âm",
        "Nghĩa tiếng Việt",
        "Loại"
      ],
      "rows": [
        [
          {
            "zh": "下雨了。"
          },
          {
            "py": "Xià yǔ le."
          },
          {
            "vn": "Trời mưa rồi."
          },
          {
            "type": "Hiện tượng"
          }
        ],
        [
          {
            "zh": "下雪了。"
          },
          {
            "py": "Xià xuě le."
          },
          {
            "vn": "Trời tuyết rồi."
          },
          {
            "type": "Hiện tượng"
          }
        ],
        [
          {
            "zh": "上课了。"
          },
          {
            "py": "Shàng kè le."
          },
          {
            "vn": "Vào lớp rồi."
          },
          {
            "type": "Hiện tượng"
          }
        ],
        [
          {
            "zh": "太棒了！"
          },
          {
            "py": "Tài bàng le!"
          },
          {
            "vn": "Tuyệt vời quá!"
          },
          {
            "type": "Cảm thán"
          }
        ],
        [
          {
            "zh": "小心！"
          },
          {
            "py": "Xiǎoxīn!"
          },
          {
            "vn": "Cẩn thận!"
          },
          {
            "type": "Cảm thán"
          }
        ],
        [
          {
            "zh": "对不起！"
          },
          {
            "py": "Duìbuqǐ!"
          },
          {
            "vn": "Xin lỗi!"
          },
          {
            "type": "Xã giao"
          }
        ],
        [
          {
            "zh": "请进！"
          },
          {
            "py": "Qǐng jìn!"
          },
          {
            "vn": "Mời vào!"
          },
          {
            "type": "Xã giao"
          }
        ]
      ]
    },
    "note": ""
  },
  {
    "num": 2,
    "title": "Trợ từ ngữ khí",
    "titleZh": "「了(1)」",
    "sub": "「了」đứng cuối câu hoặc tại chỗ ngừng trong câu, diễn đạt sự thay đổi hoặc tình huống mới xuất hiện.",
    "rules": [
      {
        "label": "Khẳng định",
        "text": "Chủ ngữ + VP + 了"
      },
      {
        "label": "Phủ định",
        "text": "没 + VP (không dùng 了 ở cuối)"
      },
      {
        "label": "Nghi vấn",
        "text": "Chủ ngữ + VP + 了 + 吗？"
      }
    ],
    "formula": [],
    "table": {
      "columns": [
        "Khẳng định",
        "Phủ định (没)",
        "Nghi vấn (吗)"
      ],
      "rows": [
        [
          {
            "zh": "下雨了。",
            "vn": "Trời mưa rồi."
          },
          {
            "zh": "没下雨。",
            "vn": "Trời không mưa."
          },
          {
            "zh": "下雨了吗？",
            "vn": "Trời mưa rồi chưa?"
          }
        ],
        [
          {
            "zh": "他去学校了。",
            "vn": "Anh ấy đi học rồi."
          },
          {
            "zh": "没去上学。",
            "vn": "Chưa đi học."
          },
          {
            "zh": "弟弟起床了吗？",
            "vn": "Em đã dậy chưa?"
          }
        ],
        [
          {
            "zh": "昨天下雪了。",
            "vn": "Hôm qua tuyết rơi rồi."
          },
          {
            "zh": "没来公司。",
            "vn": "Không đến công ty."
          },
          {
            "zh": "你吃饭了吗？",
            "vn": "Bạn ăn cơm chưa?"
          }
        ]
      ]
    },
    "note": "⚠️ Lưu ý： Phủ định dùng「没」, KHÔNG dùng「不了」. Cuối câu phủ định KHÔNG có「了」."
  },
  {
    "num": 3,
    "title": "Cấu trúc",
    "titleZh": "「太……了」",
    "sub": "Diễn đạt mức độ rất cao, dùng để cảm thán (có thể là tích cực hoặc tiêu cực).",
    "rules": [
      "Cấu trúc： 太 + Tính từ / Cụm tính từ + 了"
    ],
    "formula": [
      {
        "cls": "fb-t",
        "text": "太"
      },
      {
        "cls": "fb-adj",
        "text": "Tính từ"
      },
      {
        "cls": "fb-le",
        "text": "了"
      },
      {
        "cls": "fb-arrow",
        "text": "→"
      },
      {
        "gloss": "... quá! / ... lắm!"
      }
    ],
    "table": {
      "columns": [
        "Câu",
        "Phiên âm",
        "Nghĩa"
      ],
      "rows": [
        [
          {
            "zh": "太冷了！"
          },
          {
            "py": "Tài lěng le!"
          },
          {
            "vn": "Lạnh quá!"
          }
        ],
        [
          {
            "zh": "这个杯子太小了。"
          },
          {
            "py": "Zhège bēizi tài xiǎo le."
          },
          {
            "vn": "Cái cốc này nhỏ quá."
          }
        ],
        [
          {
            "zh": "太棒了！"
          },
          {
            "py": "Tài bàng le!"
          },
          {
            "vn": "Tuyệt vời quá!"
          }
        ],
        [
          {
            "zh": "今天太高兴了。"
          },
          {
            "py": "Jīntiān tài gāoxìng le."
          },
          {
            "vn": "Hôm nay vui quá."
          }
        ],
        [
          {
            "zh": "太好吃了！"
          },
          {
            "py": "Tài hàochi le!"
          },
          {
            "vn": "Ngon quá!"
          }
        ]
      ]
    },
    "note": "💡 Phân biệt 有点儿 và 一点儿：\n• 有点儿 + Tính từ → mức độ nhỏ, thường hàm ý không tốt: 今天有点儿冷 (Hôm nay hơi lạnh)\n• Tính từ + 一点儿 → so sánh / yêu cầu: 便宜一点儿吧 (Rẻ hơn một chút đi)"
  }
];

// Tiêu đề bài học (header info)
const metaData = {
  "badge": "Bài 12",
  "zh": "昨天下雪了",
  "py": "Zuótiān xià xuě le",
  "vn": "Hôm qua tuyết rơi rồi",
  "chips": [
    {
      "icon": "snow",
      "text": "Chủ đề: Thời tiết & Sức khỏe"
    },
    {
      "icon": "book",
      "text": "24 từ mới"
    },
    {
      "icon": "chat",
      "text": "3 hội thoại"
    },
    {
      "icon": "compass",
      "text": "3 điểm ngữ pháp"
    }
  ]
};
