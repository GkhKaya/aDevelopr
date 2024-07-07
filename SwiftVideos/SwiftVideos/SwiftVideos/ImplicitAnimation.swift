//
//  ImplicitAnimation.swift
//  SwiftVideos
//
//  Created by Gokhan Kaya on 7.07.2024.
//

import SwiftUI

struct ImplicitAnimation: View {
    @State private var isExpanded = false
    var body: some View {
       Circle()
            .fill(Color.blue)
            .frame(width: isExpanded ? 200 : 100,height: isExpanded ? 200 : 100)
            .animation(.easeInOut(duration: 1.0))
            .onTapGesture {
                isExpanded.toggle()
            }
    }
}

#Preview {
    ImplicitAnimation()
}
