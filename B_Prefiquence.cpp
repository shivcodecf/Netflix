#include <bits/stdc++.h>
#define ll long long
#define pb push_back
#define mp make_pair
#define sc second
#define fr first
#define fast ios_base::sync_with_stdio(false);
#define  endl "\n"  

using namespace std;
int main()
{
    fast
    cin.tie(NULL);
    cout.tie(NULL);
    cout.precision(15);
    cout << fixed;
    const int mod = 1000000009; 

       int t;
    cin >>t;

    while(t--)
    {
      int n,m;
      cin>>n>>m;
        string s,s1;
        cin>>s>>s1;
        int j=0,ans=0;
       
        for(int i=0 ; i<n ;i++)
        {
            char check= s[i];
            while( j<m && s1[j] != check)
            {
                j++;
            }

              
              if(j == m)
                break;
              
                ans++;
                j+=1;
              
              
          
            
        }
        cout<<ans<<endl;;
    }
    
   
    return 0;
}