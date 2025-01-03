async function scheduleHtmlProvider() {

    await loadTool('AIScheduleTools')

    const termYear = await AISchedulePrompt({
        titleText: '导入设置',
        tipText: '请输入学年起始年份。例如：输入2023以表示2023-2024学年。',
        defaultText: (() => {
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth() + 1;
            return month >= 6 ? year.toString() : (year - 1).toString();
        })(),
        validator: value => {
            const yearPattern = /^\d{4}$/;
            if (!yearPattern.test(value)) {
                return '格式错误，请输入合法的四位年份！\n例如：输入2023以表示2023-2024学年。';
            }
            return false;
        }
    })

    const termStage = await AISchedulePrompt({
        titleText: '导入设置',
        tipText: '请输入学期数。输入1以表示上学期，输入2以表示下学期。',
        defaultText: (() => {
            const now = new Date();
            const month = now.getMonth() + 1;
            return month >= 6 && month <= 11 ? '1' : '2';
        })(),
        validator: value => {
            if (!value in ['1', '2', '3']) {
                return '格式错误，输入1以表示上学期，输入2以表示下学期。';
            }
            return false;
        }
    })

    try {

        const res = await fetch("https://ehall.nbu.edu.cn/jwapp/sys/wdkb/modules/xskcb/xskcb.do", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "zh-CN,zh;q=0.9",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://ehall.nbu.edu.cn/jwapp/sys/wdkb/*default/index.do?",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `XNXQDM=${termYear}-${parseInt(termYear, 10) + 1}-${termStage}`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(
            res => res.json()
        );
        return JSON.stringify(res.datas.xskcb.rows)

    } catch (error) {
        console.error(error)
        await AIScheduleAlert(error.message)
        return 'do not continue'
    }

}