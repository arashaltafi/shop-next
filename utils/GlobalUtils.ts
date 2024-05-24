const openLink = (link: string) => {
    window.open(link, '_blank');
}

const openMail = (email: string) => {
    try {
        window.open(`mailto:${email}`);
    } catch (error: any) {
        console.error(error.message)
        // dispatch(snackBarSlice.actions.setSnackBar({
        //     isOpen: true,
        //     message: 'متاسفانه دستگاه شما از این قابلیت پشتیبانی نمی کند',
        //     type: 'error',
        // }))
    }
}

const openPhone = (phone: string) => {
    try {
        window.open(`tel:${phone}`);
    } catch (error: any) {
        console.error(error.message)
        // dispatch(snackBarSlice.actions.setSnackBar({
        //     isOpen: true,
        //     message: 'متاسفانه دستگاه شما از این قابلیت پشتیبانی نمی کند',
        //     type: 'error',
        // }))
    }
}

const getDeviceSize = (): string => {
    if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        if (width >= 0 && width < 300) return 'xm';
        if (width >= 300 && width < 480) return 'sm';
        if (width >= 480 && width < 640) return 'md';
        if (width >= 640 && width < 768) return 'lg';
        if (width >= 768 && width < 1024) return 'xl';
    }
    return 'xl';
}

const generateRandomNumber = (): number => {
    const randomNumber = Math.floor(Math.random() * 10000000); // Generates a random 4-digit number
    if (randomNumber < 1000 || randomNumber > 9999) {
        return generateRandomNumber();
    } else {
        return randomNumber
    }
}

const convertToEnglish = (value: string): string => {
    // Define a mapping of Persian to English numbers
    const persianToEnglishMap: { [key: string]: string } = {
        '۰': '0',
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9'
    };

    // Replace Persian numbers with English numbers using the mapping
    return value.replace(/[۰-۹]/g, (matched) => persianToEnglishMap[matched]);
};

const isEmptyObject = (obj: any) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false
        }
    }
    return true
}

export {
    openLink,
    openMail,
    openPhone,
    getDeviceSize,
    generateRandomNumber,
    convertToEnglish,
    isEmptyObject
}