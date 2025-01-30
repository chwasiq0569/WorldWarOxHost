export const isLoginBlocked = (response) => {
    try {
        const res = JSON.parse(response);
        const savedTimeStamp = res.result;

        if (savedTimeStamp == null) {
            return false;
        }

        const now = new Date();
        const currentTimeStamp = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}-${String(now.getUTCDate()).padStart(2, '0')} ${String(now.getUTCHours()).padStart(2, '0')}:${String(now.getUTCMinutes()).padStart(2, '0')}:${String(now.getUTCSeconds()).padStart(2, '0')}`;

        const blockDuration = 2;

        // Convert to Date objects
        const date1 = new Date(currentTimeStamp.replace(" ", "T") + "Z");
        const date2 = new Date(savedTimeStamp.replace(" ", "T") + "Z");

        const diffMs = date1 - date2;

        const diffSeconds = diffMs / 1000;
        const diffMinutes = diffSeconds / 60;

        return diffMinutes < blockDuration;

    } catch (error) {
        return true;
    }
}
