const ary_skin = 
[
    "dry_skin",
    "combination_skin",
    "oily_skin",
    "dehydrated_oily_skin", 
    "sensitive_skin",
    "acne-prone_skin"
]

const ary_trouble =
[
    "winkle",
    "sebum",
    "oily and dry",
    "dehydrating",
    "sensitive",
    "black/white head"
];



const ary_component =
[
    ["히알루론산", "세라마이드", "글리세린"],
    ["판테놀","히알루론산", "알란토인", "스쿠알란"],
    ["살리실산", "나이아신 아마이드", "티트리 오일", "레티놀"],
    ["판테놀","히알루론산", "알란토인", "스쿠알란"],
    ["알란토인", "티트리 오일"],
    ["살리실산", "레티놀", "티트리 오일", "과산화 벤조일"]
];

const ary_message = [
    "건성은 ph가 높은 알칼리성 피부입니다.\n이 때 건성 피부는 대부분 민감하므로, 세안 단계에서 밀크타입의 클렌저를 사용하는 것이 좋습니다!",
    "복합성은 ph가 높은 부분과 낮은 부분이 섞여 있는 피부입니다.\n그러므로 유수분 밸런스 조절에 좋은 판테놀, 알란토인 같은 성분이 들어간 화장품을 사용하는 것이 좋습니다!",
    "지성은 ph가 낮은 산성 피부입니다. \n이 때 지성 피부는 대부분 유분과 각질이 많이 나오므로 aha,bha같은 성분이 들어간 화장품을 사용하는 것이 좋습니다!",
    "수부지 피부는 겉은 유분기가 있고, 속은 건조하여 ph가 높은 알칼리성 피부입니다.\n이 때는 속건조를 해결할 수 있는 히알루론산이 함유된 화장품을 사용하는 것이 좋습니다!",
    "민감성은 ph가 매우 높은 알칼리성 피부입니다.\n이 때 민감성 피부는 대부분 민감하므로, 티트리 오일이 함유된 화장품을 사용하는 것이 좋습니다!",
    "트러블성 피부는 ph가 매우 낮은 산성 피부입니다!\n이 때는 피부 진정에 탁월한 티트리 오일이 함유된 제품을 쓰는 것이 좋습니다!"
];


let message = "";
let skin_index = 0;
let component_index = 0;
let skin_type = "";

// class = "radio_skin"인 모든 radio가져오기
const radio_skin = document.querySelectorAll('input[class ="radio_skin"]');

// 피부 타입 가져오기
radio_skin.forEach((radio) => {
        radio.addEventListener('change', (event) => {
        // 선택된 값 가져오기
        const skin_type_temp = event.target.value;
        for(let i = 0; i < 6; i++)
        {
            if(skin_type_temp == ary_skin[i])
            {
                skin_index = i;
                skin_type = ary_skin[i];
            }
        }
  });
});

// class = "radio_skin"인 모든 radio가져오기
const radio_trouble = document.querySelectorAll('input[class ="radio_trouble"]');

// 피부 타입 가져오기
radio_trouble.forEach((radio) => {
        radio.addEventListener('change', (event) => {
        // 선택된 값 가져오기
        const trouble_type = event.target.value;
        for(let i = 0; i < 6; i++)
        {
            if(trouble_type_type == ary_trouble[i])
            {
                trouble_index = i;
            }
        }
  });
});


const input_ph = document.getElementById("input_ph");
let ph;



function get_ph()
{
    ph = input_ph.value();
    print_res(ph);
};

input_ph.addEventListener("onchange", get_ph);
