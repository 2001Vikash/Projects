export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    // Remove it before the final submission of projects...
    // token: 'BQDb6lZP1-Tt7uLtsRMDAWMfqIT_VukvIbeONZW3Lr7hsmAiK1x0tUiVL50w7rE-Jn8fx7rBZPhutQpCatHfepdngGrCkhkWlv-H5qfSkmXNwWKpXi302QS3GEC9zde3VppZ9bhBxqGOyQdW--BjN-0Zu3osv1Tu8MyxeEGk6XVkyKN9XP8JsiVPYScwNeolKMokVKLarXm9QzWGpbty',
}

const reducer = (state, action) => {
   console.log(action);//for the debugging purpose.

   switch(action.type){
    case 'SET_USER':
        return{
            ...state,
            user : action.user,
        };
    case 'SET_TOKEN':
        return{
            ...state,
            token : action.token,
        };

    case 'SET_PLAYLISTS':
        return{
            ...state,
            playlists : action.playlists,
        };
        
    case 'SET_DISCOVER_WEEKLY':
        return{
            ...state,
            discover_weekly : action.discover_weekly,
        };

    default : 
      return state;
   }
}

export default reducer;