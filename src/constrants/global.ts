export const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

export const genders = ['Male', 'Female', 'Other']

export const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', '0+', "0-"]


export const monthOptions = monthNames.map((item) => {
    return {
        value: item,
        label: item,
    }
})

export const gendersOptions = genders?.map((item) => ({
    value: item.toLowerCase(),
    label: item,
}))

export const bloodGroupOptions = bloodGroups?.map((item) => ({
    value: item,
    label: item
}))