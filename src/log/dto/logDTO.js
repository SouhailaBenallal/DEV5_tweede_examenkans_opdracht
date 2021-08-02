exports.logDto = (log) => {
    return {
        UUID: log.uuidLog,
        content: log.Content,
        category: {
            UUID: log.uuidCat,
            Name: log.Name
        }

    }
}