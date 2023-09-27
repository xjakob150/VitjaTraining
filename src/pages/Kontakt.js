export default function Kontakt() {
    return (<>
    <h1>Kontakt</h1>
    <div className="form-container">
        <form>
            <div className="form-group">
            <label for="ime">ime:</label>
            <input type="text" id="ime" name="ime" required/><br/>
            </div>

            <div className="form-group">
            <label for="priimek">priimek:</label>
            <input type="text" id="priimek" name="priimek" required/><br/>
            </div>

            <div className="form-group">
            <label for="zadeva">zadeva:</label>
            <textarea id="zadeva" name="zadeva" rows="4" required></textarea><br/>
            </div>

            <div className="form-group">
            <input type="submit" value="Submit"/>
            </div>
        </form>
    </div>

    </>)
}