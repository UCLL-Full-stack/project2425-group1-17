// execute: npx ts-node util/seed.ts

import { PrismaClient } from '@prisma/client';
import { set } from 'date-fns';

const prisma = new PrismaClient();

const main = async () => {
    await prisma.employee.deleteMany();
    //await prisma.calendar.deleteMany();
    await prisma.appointment.deleteMany();
    await prisma.client.deleteMany();

    // const calendar_1 = await prisma.calendar.create({
    //     data: {
    //         time_frame: 'week',
    //         time_frame_start: new Date('2024-12-16'),
    //     },
    // });

    // const calendar_2 = await prisma.calendar.create({
    //     data: {
    //         time_frame: 'week',
    //         time_frame_start: new Date('2024-12-16'),
    //     },
    // });

    const afspraak_1_1 = await prisma.appointment.create({
        data: {
            title: 'afspraal met client a',
            startDate: set(new Date(), { hours: 15 }),
            endDate: set(new Date(), { hours: 16, minutes: 30 }),
            note: 'vergeet papieren niet mee te nemen',
            // calendar: { connect: { id: calendar_1.id } },
        },
    });

    const afspraak_1_2 = await prisma.appointment.create({
        data: {
            title: 'afspraal met client b',
            startDate: set(new Date(), { hours: 16, minutes: 30 }),
            endDate: set(new Date(), { hours: 17 }),
            // calendar: { connect: { id: calendar_1.id } },
        },
    });

    const afspraak_2_1 = await prisma.appointment.create({
        data: {
            title: 'afspraal met client c',
            startDate: set(new Date(), { hours: 15 }),
            endDate: set(new Date(), { hours: 16, minutes: 30 }),
            note: 'vergeet niet te bellen op voorhand',
            // calendar: { connect: { id: calendar_2.id } },
        },
    });

    const employee_1 = await prisma.employee.create({
        data: {
            name: 'hans een',
            work_hours: 40,
            current_hours: 20,
            phone_number: '0123456789',
            // calendar: { connect: { id: calendar_1.id } },
        },
    });

    const employee_2 = await prisma.employee.create({
        data: {
            name: 'hans twee',
            work_hours: 30,
            current_hours: 10,
            phone_number: '9876543210',
            // calendar: { connect: { id: calendar_2.id } },
        },
    });

    const client_1 = await prisma.client.create({
        data: {
            name: 'a',
            phone_number: '0123789456',
            town: 'Amsterdam',
            adres: 'hoveniersdreef',
            house_number: 1,
            postal_code: '1234',
            employees: {
                create: [
                    {
                        employee: { connect: { id: employee_1.id } },
                    },
                ],
            },
        },
    });

    const client_2 = await prisma.client.create({
        data: {
            name: 'b',
            phone_number: '0123789987',
            town: 'Hasselt',
            adres: 'stationsstraat',
            house_number: 79,
            postal_code: '4566',
            employees: {
                create: [
                    {
                        employee: { connect: { id: employee_1.id } },
                    },
                ],
            },
        },
    });

    const client_3 = await prisma.client.create({
        data: {
            name: 'c',
            phone_number: '9993789987',
            town: 'Hasselt',
            adres: 'naamsevest',
            house_number: 10,
            postal_code: '3323',
            employees: {
                create: [
                    {
                        employee: { connect: { id: employee_2.id } },
                    },
                ],
            },
        },
    });
};

(async () => {
    try {
        await main();
        await prisma.$disconnect();
    } catch (error) {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    }
})();
