async function scheduleTimer({
    providerRes,
    parserRes
} = {}) {

    return {
        totalWeek: 17,
        startSemester: '',
        startWithSunday: false,
        showWeekend: true,
        forenoon: 4,
        afternoon: 4,
        night: 4,
        sections: [
            {
                section: 1,
                startTime: '08:00',
                endTime: '08:45',
            }, {
                section: 2,
                startTime: '08:50',
                endTime: '09:35',
            }, {
                section: 3,
                startTime: '10:00',
                endTime: '10:45',
            }, {
                section: 4,
                startTime: '10:50',
                endTime: '11:35',
            }, {
                section: 5,
                startTime: '13:30',
                endTime: '14:15',
            }, {
                section: 6,
                startTime: '14:20',
                endTime: '15:05',
            }, {
                section: 7,
                startTime: '15:30',
                endTime: '16:15',
            }, {
                section: 8,
                startTime: '16:20',
                endTime: '17:05',
            }, {
                section: 9,
                startTime: '18:00',
                endTime: '18:45',
            }, {
                section: 10,
                startTime: '18:50',
                endTime: '19:35',
            }, {
                section: 11,
                startTime: '19:40',
                endTime: '20:25',
            }, {
                section: 12,
                startTime: '20:30',
                endTime: '21:15',
            }
        ],
    }

}