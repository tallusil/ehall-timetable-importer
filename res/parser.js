function scheduleHtmlParser(json_str) {

    const json = JSON.parse(json_str);

    const courseInfos = json.map(course => {

        const weeks = [];
        for (let i = 0; i < course.SKZC.length; i++) {
            if (course.SKZC[i] === '1') {
                weeks.push(i + 1);
            }
        }

        const sections = [];
        const startSection = parseInt(course.KSJC, 10);
        const endSection = parseInt(course.JSJC, 10);
        for (let i = startSection; i <= endSection; i++) {
            sections.push(i);
        }

        let position = course.JASMC || '未知地点';
        position = position.replace(/（.*?）|\(.*?\)/g, '');

        let teacher = course.SKJS || '未知教师';
        teacher = teacher.replace(/\d+/g, '');
        teacher = teacher.split(/,|，/)[0] + (teacher.includes(',') || teacher.includes('，') ? '等' : '');

        return {
            name: course.KCM,
            position,
            teacher,
            weeks,
            day: parseInt(course.SKXQ, 10),
            sections,
        };

    });

    return courseInfos;

}
