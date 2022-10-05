<template>
    <div class="about-company-container">
        <div class="about-company-content">
            <div class="about-company-top">
                <h1>О компании в цифрах</h1>
                <div class="top-center">
                    <img src="@/assets/Content/FiveAboutCompany/img1.png" alt="">
                    <p>Год основания: <i>2014</i></p>
                </div>
                <div class="top-right">
                    <div class="years-visible" @click="yearsActive">
                        <span>{{yearActive}} год</span>
                        <img src="@/assets/Content/FiveAboutCompany/Vector.png" alt="" :class="isYearsActive ? 'img-active' : 'img-deactive'">
                    </div>
                    <div class="years-hidden" :class="isYearsActive ? 'years-active' : 'years-deactive'">
                        <div class="year-items" v-for="year, idx in years" :key="idx" @click="selectYear(year)">
                        <span>{{year}} год</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-company-bottom">
                <div class="about-bottom-left">
                    <div class="left-items">
                        <img src="@/assets/Content/FiveAboutCompany/img1.svg" alt="">
                        <div class="item-title">
                            <p>{{selectedInsurance.humanIns}}</p>
                            <span>человек застраховано</span>
                        </div>
                    </div>
                    <div class="left-items"></div>
                    <div class="left-items"></div>
                    <div class="left-items"></div>
                    <div class="left-items"></div>
                    <div class="left-items"></div>
                </div>
                <div class="about-bottom-right"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'about-company',
    data(){
        return{
            yearActive: new Date().getFullYear(),
            isYearsActive: false,
            insurance: [
                {
                    val: 2022,
                    humanIns: '32 619',
                    paidIns: '7 462 500',
                    turIns: '11 392',
                    avtoIns: '743',
                    gettingIns: '51 250 597',
                    policyIns: '50 000'
                },
                {
                    val: 2021,
                    humanIns: '28 354',
                    paidIns: '5 967 300',
                    turIns: '8 950',
                    avtoIns: '545',
                    gettingIns: '42 346 558',
                    policyIns: '32 000'
                }
            ]
        }
    },
    computed:{
        selectedInsurance(){
            let activeInsurance
            this.insurance.forEach(elem =>{
                if(elem.val == this.yearActive){
                    activeInsurance = elem
                }
            })
            return activeInsurance
        },
        years(){
            let years = []
            let nowDate = new Date().getFullYear()
            for(let i = nowDate-15; i<nowDate+1; i++){
                years.push(i)
            }
            return years
        }
    },
    methods: {
        yearsActive(){
            this.isYearsActive = !this.isYearsActive
        },
        selectYear(e){
            this.yearActive = e 
        }   
    }
}
</script>