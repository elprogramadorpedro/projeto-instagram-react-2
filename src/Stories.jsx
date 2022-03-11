export default function Stories() {
    return (
        <div class="stories">
            <Story src="assets/img/9gag.svg" usuario="9gag" />
            <Story src="assets/img/meowed.svg" usuario="meowed"/>
            <Story src="assets/img/barked.svg" usuario="barked"/>
            <Story src="assets/img/nathanwpylestrangeplanet.svg" usuario="nathanwpylestrangeplanet"/>
            <Story src="assets/img/wawawicomics.svg" usuario="wawawicomics"/>
            <Story src="assets/img/respondeai.svg" usuario="respondeai"/>
            <Story src="assets/img/filomoderna.svg" usuario="filomoderna"/>
            <Story src="assets/img/memeriagourmet.svg" usuario="memeriagourmet"/>

            <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props) {
    return (
        <div class="story">
        <div class="imagem">
            <img src={props.src} />
        </div>
        <div class="usuario">
            {props.usuario}
        </div>
        </div>
    )
}