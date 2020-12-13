export default function validPassword(password, confirmPassword)  {
    if (password === confirmPassword && password.length >= 6 && confirmPassword >= 6) { return true; }
    return false;
}

export default function validFullName(fullName) {
    if (fullName.length > 1) { return true; }
    return false;
}

export default function validDisplayName(displayName) {
    if (displayName.length >= 1) { return true; }
    return false;
}

export default function validEmail(email) {
    return(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
}